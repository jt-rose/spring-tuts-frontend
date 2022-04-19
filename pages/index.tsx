import { useEffect, useState } from "react";
import { getAllApplications } from "../utils/api";
import { ApplicationData } from "types/Application";
import { Head } from "components/Head";
import { ApplicationAccordion } from "components/ApplicationAccordion";

const Tracker = () => {
  const [data, setData] = useState<ApplicationData[]>([]);
  useEffect(() => {
    getAllApplications().then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <Head title="Job Applications" />
      <h1>Job Applications</h1>
      <ApplicationAccordion data={data} />
    </div>
  );
};

export default Tracker;
