import { useEffect, useState } from "react";
import {
  createApplication,
  getAllApplications,
  getSingleApplication,
} from "../utils/api";

const Tracker = () => {
  const [data, setData] = useState<{ companyName?: string }[]>([]);
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
  }, []);
  return (
    <>
      <h1>Hi Everybody!</h1>
      <ul>
        {data.map((d) => (
          <li>{d.companyName ? d.companyName : "NA"}</li>
        ))}
      </ul>
    </>
  );
};

export default Tracker;
