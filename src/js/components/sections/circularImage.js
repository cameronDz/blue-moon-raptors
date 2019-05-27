import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import * as _config from '../../../../data/config.json';

const styles = {
  detail: {
    paddingBottom: '10px'
  },
  description: {
    fontSize: '14px',
    textAlign: 'center'
  },
  image: {
    borderRadius: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '10px',
    width: '84%'
  },
  title: {
    fontSize: '18px',
    fontWeight: '900',
    textAlign: 'center'
  }
};

const circularImage = props => {
  const { classes, details } = props;
  const imageUrl = _config.assetBucket + details.imageUrl;

  return (
    <div className={classes.detail}>
      <img className={classes.image} src={imageUrl}></img>
      <div className={classes.title}>{details.title}</div>
      <div className={classes.description}>{details.description}</div>
    </div>);
};

export default withStyles(styles)(circularImage);
