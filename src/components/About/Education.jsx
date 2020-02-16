import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import IconLabel from "../IconLabel";
import { School, LocationOn, Today } from "@material-ui/icons";
import { data } from "../../data/educationData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  divider: {
    backgroundColor: "white"
  }
});

const Education = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h5" color="primary">
          Education
        </Typography>
      </Grid>
      <Divider className={classes.divider} variant="fullWidth"></Divider>

      {data.map(college => (
        <Grid item container direction="column" spacing={2} key={college.name}>
          <Grid item>
            <Typography variant="h6" color="secondary">
              {college.degree}
            </Typography>
          </Grid>

          <Grid item>
            <IconLabel
              icon={<School fontSize="inherit" />}
              label={`${college.name} - ${college.college}`}
              variant="subtitle1"
            ></IconLabel>
          </Grid>
          <Grid item>
            <IconLabel
              icon={<Today fontSize="inherit" />}
              label={`${college.start} - ${college.end}`}
              variant="subtitle1"
            ></IconLabel>
          </Grid>
          <Grid item>
            <IconLabel
              icon={<LocationOn fontSize="inherit" />}
              label={college.location}
              variant="subtitle1"
            ></IconLabel>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Education;
