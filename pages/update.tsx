// ! COPY AND PASTED from add form - need to modify

import { ApplicationForm } from "components/ApplicationForm";
import { Head } from "components/Head";
import { ApplicationData } from "types/Application";
import { createApplication } from "../utils/api";

const emptyApplicationData: ApplicationData = {
  id: -1,
  companyName: "",
  position: "",
  website: "",
  appliedOn: new Date(),
  interview: false,
  notes: "",
};

const Update = () => {
  return (
    <div>
      <Head title="Update Application"></Head>
      <ApplicationForm query={createApplication} data={emptyApplicationData} />
    </div>
  );
};

export default Update;
