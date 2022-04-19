import { ApplicationData } from "types/Application";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

export const ApplicationAccordion = (props: { data: ApplicationData[] }) => {
  return (
    <div>
      {props.data.map((app, index) => (
        <Accordion key={app.position + "-" + index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel{index}a-header`}
          >
            <Typography>{app.companyName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{app.notes}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
