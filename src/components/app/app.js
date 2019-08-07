import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import NavigationBar from 'components/app/navigation-bar/app-navigation-bar';
import Footer from 'components/app/footer/app-footer';
import Game from 'components/exercises/exercises';

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

      <Game />
      
      <Footer />
    </React.Fragment>
  );
}