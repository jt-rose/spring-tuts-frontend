import { useState, MouseEvent } from "react";
import { ApplicationData, CreateOrUpdateQuery } from "types/Application";
import { useRouter } from "next/router";
import {
  Box,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers";

export const ApplicationForm = (props: {
  query: CreateOrUpdateQuery;
  data: ApplicationData;
}) => {
  const [companyName, setCompanyName] = useState(props.data.companyName);
  const [position, setPosition] = useState(props.data.position);
  const [website, setWebsite] = useState(props.data.website);
  const [appliedOn, setAppliedOn] = useState(props.data.appliedOn);
  const [interview, setInterview] = useState(props.data.interview);
  const [notes, setNotes] = useState(props.data.notes);

  const router = useRouter();

  const handleCancel = () => {
    // revert form data
    setCompanyName(props.data.companyName);
    setPosition(props.data.position);
    setWebsite(props.data.website);
    setAppliedOn(props.data.appliedOn);
    setInterview(props.data.interview);
    setNotes(props.data.notes);

    // return to home page
    router.push("/");
  };

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    const response = await props.query({
      companyName,
      position,
      website,
      appliedOn,
      interview,
      notes,
    });

    if (response.data) {
      // ! ADD LATER - refetch data

      // return to home page
      router.push("/");
    } else {
      // ! ADD LATER -  display error message
      console.log("Error! ", response);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <FormGroup>
          <TextField
            required
            id="company-name-input"
            label="Company Name"
            //defaultValue="Hello World"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            required
            id="position-input"
            label="Position"
            //defaultValue="Hello World"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <TextField
            required
            id="website-input"
            label="Website"
            //defaultValue="Hello World"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <TextField
            id="notes-input"
            label="Notes"
            multiline
            rows={4}
            //defaultValue="Hello World"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <DatePicker
            value={appliedOn}
            onChange={(newDate) => setAppliedOn(newDate ? newDate : appliedOn)}
            renderInput={(params) => <TextField {...params} />}
          />

          <FormControlLabel
            control={
              <Switch
                value={interview}
                onChange={() => setInterview(!interview)}
              />
            }
            label="Interview"
          />

          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </FormGroup>
      </div>
    </Box>
  );
};
