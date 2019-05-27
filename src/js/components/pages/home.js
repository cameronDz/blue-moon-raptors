import React from 'react';
import HomeBottomSection from '../sections/homeBottom';
import FooterSection from '../sections/footer';
import HeaderSection from '../sections/header';
import TopSection from '../sections/top';

const home = () => {
  
  return (
    <React.Fragment>
      <HeaderSection />
      <TopSection />
      <HomeBottomSection />
      <FooterSection />
    </React.Fragment>);
};

export default home;
