import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  footer: {
    textAlign: 'center'
  }
};

const footerSection = props => {
  const { classes } = props;
  return (<div className={classes.footer}>FOOTER TODO</div>);
};

export default withStyles(styles)(footerSection);
