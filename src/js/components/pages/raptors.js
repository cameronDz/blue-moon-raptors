import React from 'react';
import FooterSection from '../sections/footer';
import HeaderSection from '../sections/header';
import BirdCardSlider from '../sections/birdCardSlider';

const raptorsPage = () => {

  return (
    <React.Fragment>
      <HeaderSection />
      <BirdCardSlider />
      <FooterSection />
    </React.Fragment>
  );
};

export default raptorsPage;
