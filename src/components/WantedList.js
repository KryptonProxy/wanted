import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WantedCard from './WantedCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function WantedList() {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/wanted/v1/list", {
        method: "GET",
        headers: { Accept: "application/json" },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setData(result);
          setIsFetching(false);
        })
        .catch((e) => {
          console.log(e);
          setIsFetching(true);
        });
  
}, []);

  const classes = useStyles();
  
  if (isFetching || !data) {
    return <h4>Fetching...</h4>;
    } else {
        return (
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}/*Header*/>FBI</Paper>
              </Grid>
              {data.items.map((item) => {
                    return (
                    <Grid item xs={3}>
                      <WantedCard badguy={item} />
                    </Grid>
                    );
                })}
            </Grid>
          </div>
        );
      }
    }
