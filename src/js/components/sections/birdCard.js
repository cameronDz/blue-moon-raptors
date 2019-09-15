import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    width: '100%'
  }
};

const birdCard = ({ classes, image, title }) => {
  return (!!image && !!title) && (
    <Fragment>
      <h1>{title}</h1>
      <img className={classes.card} src={image} />
    </Fragment>);
};

export default withStyles(styles)(birdCard);
