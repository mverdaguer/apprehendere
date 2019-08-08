import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const NavigationBar = withRouter(
  ({ history }) => {
    const classes = useStyles();

    return (
      <React.Fragment>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} onClick={() => history.push("/")}>
              Apprehendere
            </Typography>
            <nav>
              <Link variant="button" color="textPrimary" component={RouterLink} to="/exercises" className={classes.link}>
                Exercises
              </Link>
              <Link variant="button" color="textPrimary" component={RouterLink} to="/dashboard" className={classes.link}>
                Dashboard
              </Link>
              <Link variant="button" color="textPrimary" component={RouterLink} to="/about" className={classes.link}>
                About
              </Link>
            </nav>
            <Button href="#" color="primary" variant="outlined" className={classes.link}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
});

export default NavigationBar;
