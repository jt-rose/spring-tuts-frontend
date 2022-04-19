import { ApplicationForm } from "components/ApplicationForm";
import { Head } from "components/Head";
import { ApplicationData } from "types/Application";
import { getSingleApplication, updateApplication } from "../../utils/api";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Update = () => {
  const [applicationData, setApplicationData] =
    useState<null | ApplicationData>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  // router has some downtime, so useEffect will check when its ready
  // and then use the id param to query the DB for the application
  useEffect(() => {
    if (router.isReady) {
      const num = Number(id);
      // if route is incorrect, redirect to home page
      if (Number.isNaN(num)) {
        router.push("/");
      }
      getSingleApplication(num).then((response) => {
        // if no such route found, redirect to home page
        // Note: this redirect and the the one above should not occur
        // if everything is wired up correctly
        // but could happen if a user entered an incorrect url
        // hence the redirect rather than error handling / message
        if (!response.data) {
          router.push("/");
        } else {
          setLoading(false);
          setApplicationData(response.data);
        }
      });
    }
  }, [router.isReady]);

  // ! ADD better styling later
  if (loading) {
    return <p>...loading</p>;
  }
  if (applicationData) {
    return (
      <div>
        <Head title="Update Application"></Head>
        <ApplicationForm
          query={updateApplication(applicationData.id)}
          data={applicationData}
        />
      </div>
    );
  }
  // this path is here to satisfy all conditions
  // but should never be rendered due to the router catching a missing application
  // ! add better formatting later just in case
  return <p>error</p>;
};

export default Update;
