/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './main.css';
import MountainPoint from '../mountain-point/mountain-point';
import landscapeLayer from '../../img/landscape-main.png'
import { useSelector } from 'react-redux';

const MainPage = () => {
  const mountainsList = useSelector((state) => state.mountainsList);

  return (
    <React.Fragment>
      <main>
        <div className="layer">
          {mountainsList.map((mountain) => <MountainPoint mountainPoint={mountain} key={mountain.id}/>)}
          
          <img className="landscape" src={landscapeLayer} alt="Landscape image" />
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;