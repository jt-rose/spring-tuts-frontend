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

const Add = () => {
  return (
    <div>
      <Head title="Add New Application"></Head>
      <ApplicationForm query={createApplication} data={emptyApplicationData} />
    </div>
  );
};

export default Add;
