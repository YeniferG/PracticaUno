import React from "react";
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="filled-multiline-flexible" label="Ingrese Valor" size="small" variant="filled" />
            </form>
          </Paper>
        </Grid>

        <Grid item xs={2}></Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              7
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              8
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              9
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="secondary" size="large">
              C
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}></Grid>

        <Grid item xs={2}></Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              4
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              5
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              6
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="default" size="large">
              /
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}></Grid>

        <Grid item xs={2}></Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              1
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              2
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              3
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="default" size="large">
              *
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}></Grid>

        
        <Grid item xs={2}></Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="default" size="large">
              .
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" size="large">
              0
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="default" size="large">
              %
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="secondary" size="large">
              =
          </Button>
          </Paper>
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>
    </div>



  );
}

export default App;
