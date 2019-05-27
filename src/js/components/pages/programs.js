import React from 'react';
import Grid from '@material-ui/core/Grid';

import FooterSection from '../sections/footer';
import HeaderSection from '../sections/header';
import ProgramImageSlider from '../sections/programImageSlider';
import ProgramsList from '../sections/programsList';

const programs = () => {

  return (
    <React.Fragment>
      <HeaderSection />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <ProgramsList />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <ProgramImageSlider />
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
      <FooterSection />
    </React.Fragment>
  );
};

export default programs;
