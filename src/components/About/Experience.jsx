import React from "react";
import { Grid, Typography } from "@material-ui/core";
import IconLabel from "../IconLabel";
import { Work, Build, LocationOn, Today } from "@material-ui/icons";
import { data } from "../../data/experienceData";
import Heading from "../Heading";

const Experience = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Heading value="Experience" />
      </Grid>

      {data.map(job => (
        <Grid item container direction="column" spacing={2} key={job.company}>
          <Grid item>
            <Typography variant="h6" color="secondary">
              {job.role}
            </Typography>
          </Grid>

          <Grid item>
            <IconLabel
              icon={<Work fontSize="inherit" />}
              label={job.company}
              variant="subtitle1"
            ></IconLabel>
          </Grid>
          <Grid item>
            <IconLabel
              icon={<Today fontSize="inherit" />}
              label={`${job.start} - ${job.end}`}
              variant="subtitle1"
            ></IconLabel>
          </Grid>
          <Grid item>
            <IconLabel
              icon={<LocationOn fontSize="inherit" />}
              label={job.location}
              variant="subtitle1"
            ></IconLabel>
          </Grid>
          <Grid item>
            <IconLabel
              icon={<Build fontSize="inherit" />}
              label={job.tools.join(", ")}
              variant="subtitle1"
            ></IconLabel>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Experience;
