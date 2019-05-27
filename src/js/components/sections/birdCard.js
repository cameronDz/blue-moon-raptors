import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    width: '100%'
  }
};

const birdCard = props => {
  const { classes, image, title } = props;

  return (!!image && !!title)
    ? (<React.Fragment>
        <h1>{title}</h1>
        <img className={classes.card} src={image} />
      </React.Fragment>)
    : false;
};

export default withStyles(styles)(birdCard);
