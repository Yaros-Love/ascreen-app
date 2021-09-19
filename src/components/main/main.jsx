/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './main.css';
import MountainPoint from '../mountain-point/mountain-point';
import {mountainsPoints} from '../../mocks/mocks';
import landscapeLayer from '../../img/landscape-main.png'

const MainPage = ({buttonClickHandle}) => {
  return (
    <React.Fragment>
      <main>
        <div className="layer">
          {mountainsPoints.map((point) => <MountainPoint mountainPoint={point} buttonClickHandle={buttonClickHandle} key={point.id}/>)}
          
          <img className="landscape" src={landscapeLayer} alt="Landscape image" />
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;