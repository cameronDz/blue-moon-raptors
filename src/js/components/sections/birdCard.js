import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    width: '100%'
  }
};

const birdCard = ({ classes, image, title }) => {
  const cardImage = !!image && <img className={classes.card} src={image} />;
  return !!title && (
    <Fragment>
      <h1>{title}</h1>
      {cardImage}
    </Fragment>);
};

export default withStyles(styles)(birdCard);
