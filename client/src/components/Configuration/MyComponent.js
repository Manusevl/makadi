import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress variant="query" />
      <LinearProgress variant="query" color="secondary" />
      <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
    </div>
  );
}