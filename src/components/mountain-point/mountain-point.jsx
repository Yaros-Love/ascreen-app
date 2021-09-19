import React from 'react';
import { Link } from 'react-router-dom';
import './mountain-point.css';

const MountainPoint = ({mountainPoint, buttonClickHandle}) => {
  return (
    <React.Fragment>
      <div className="mountain-point" style={{width: mountainPoint.styles.width, height: mountainPoint.styles.height, top: mountainPoint.styles.top, left: mountainPoint.styles.left}}>
        <picture>
          <source srcSet={mountainPoint.icon}/>
          <img src={mountainPoint.icon} alt="Mountain Icon" />
        </picture>
        <button 
          className="mountain-name"
          onClick={() => {
            buttonClickHandle(mountainPoint.id);
          }}>
            <Link to={`/${mountainPoint.id}`}>{mountainPoint.name}</Link>
        </button>
      </div>
    </React.Fragment>
  )
};

export default MountainPoint;