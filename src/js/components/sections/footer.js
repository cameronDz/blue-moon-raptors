import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  footer: {
    backgroundColor: '#000080',
    padding: '8px 0px',
    width: '100%'
  },
  text: {
    color: '#ffffff',
    margin: '0px',
    textAlign: 'center'
  }
};

const footerSection = ({ classes }) => {
  return (
    <div className={classes.footer}>
      <p className={classes.text}>Blue Moon Raptures</p>
    </div>);
};

export default withStyles(styles)(footerSection);
