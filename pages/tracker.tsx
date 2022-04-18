import { useEffect, useState } from "react";
import {
  createApplication,
  deleteApplication,
  getAllApplications,
  getSingleApplication,
  ApplicationData,
  updateApplication,
} from "../utils/api";

const Tracker = () => {
  const [data, setData] = useState<ApplicationData[]>([]);
  useEffect(() => {
    getAllApplications()
      //.get("https://murmuring-lowlands-54876.herokuapp.com/apps")
      .then((res) => setData(res.data));

    getSingleApplication(1).then((res) => console.log(res.data));
    createApplication({
      companyName: "ABC",
      appliedOn: new Date(),
      website: "abc.co",
      interview: false,
      notes: "is this thing on?",
    });
    updateApplication(1, {
      companyName: "ACME UPDATED",
      website: "some-site",
      interview: true,
      appliedOn: new Date(),
      notes: "updated!",
    });
  }, []);
  return (
    <>
      <h1>Hi Everybody!</h1>
      <ul>
        {data.map((d, index) => (
          <>
            <li key={index + "-application-data"}>
              {d.companyName ? d.companyName : "NA"}
            </li>
            <button onClick={() => deleteApplication(d.id)}>X</button>
          </>
        ))}
      </ul>
    </>
  );
};

export default Tracker;
