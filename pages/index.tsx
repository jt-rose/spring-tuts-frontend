import { useEffect, useState } from "react";
import {
  createApplication,
  deleteApplication,
  getAllApplications,
  getSingleApplication,
  updateApplication,
} from "../utils/api";
import { ApplicationData } from "types/Application";
import { Button } from "@mui/material";
import { Head } from "components/Head";
import { ApplicationAccordion } from "components/ApplicationAccordion";

const Tracker = () => {
  const [data, setData] = useState<ApplicationData[]>([]);
  useEffect(() => {
    getAllApplications().then((res) => setData(res.data));

    getSingleApplication(1).then((res) => console.log(res.data));
    createApplication({
      companyName: "ABC",
      position: "React / Spring Boot Engineer",
      appliedOn: new Date(),
      website: "abc.co",
      interview: false,
      notes: "is this thing on?",
    });
    updateApplication(1)({
      companyName: "ACME UPDATED",
      position: "Updated Position",
      website: "some-site",
      interview: true,
      appliedOn: new Date(),
      notes: "updated!",
    });
  }, []);
  return (
    <>
      <Head title="Job Applications" />
      <h1>Job Applications</h1>
      <ul>
        {data.map((d, index) => (
          <>
            <li key={index + "-application-data"}>
              {d.companyName ? d.companyName : "NA"}
            </li>
            <Button variant="contained" onClick={() => deleteApplication(d.id)}>
              X
            </Button>
          </>
        ))}
      </ul>
      <ApplicationAccordion data={data} />
    </>
  );
};

export default Tracker;
