import React from 'react';
import './mountain-point.css';

const MountainPoint = ({mountainPoint}) => {
  return (
    <React.Fragment>
      <div className="mountain-point" style={{width: mountainPoint.styles.width, height: mountainPoint.styles.height, top: mountainPoint.styles.top, left: mountainPoint.styles.left}}>
        <picture>
          <source srcSet={mountainPoint.url}/>
          <img src={mountainPoint.url} alt="Mountain Icon" />
        </picture>
      </div>
    </React.Fragment>
  )
};

export default MountainPoint;