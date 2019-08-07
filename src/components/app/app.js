import React from 'react';
import { Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import NavigationBar from 'components/app/navigation-bar/app-navigation-bar';
import Footer from 'components/app/footer/app-footer';
import About from 'components/about/about';
import Dashboard from 'components/dashboard/dashboard';
import Exercises from 'components/exercises/exercises';

makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
}));

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar />

      <Switch>
        <Route exact path="/" component={Exercises} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/exercises" component={Exercises} />
      </Switch>
      
      <Footer />
    </React.Fragment>
  );
}