import React from 'react';
import FooterSection from '../sections/footer';
import HeaderSection from '../sections/header';
import * as _missionStatment from '../../../../data/missionStatements.json';

const mission = () => {
  return (
    <React.Fragment>
      <HeaderSection />
      <div>Mission Statement</div>
      <div>{_missionStatment.full}</div>
      <FooterSection />
    </React.Fragment>);
};

export default mission;
