import React from 'react';
import ArrowIcon from '../../img/arrow.png';
import PaginationIcon from '../../img/ellipse.png';
import FullscreenToggle from '../../img/btn_fullScreen.png';
import './mountain-page.css';
import mountainIconEmpty from '../../img/mountain-icon_empty.png';
import {MOUNTAINS_COUNT} from '../../const/const';

const MountainPage = ({currentMountain}) => {
  console.log(new Array(MOUNTAINS_COUNT));
  return (
    <React.Fragment>
      <div className="wrapper" style={{backgroundImage: currentMountain.styles.background, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="navigation">
          <div className="arrow">
            <img src={ArrowIcon} alt="arrow icon" />
          </div>
          <div className="pagination">
            <img src={PaginationIcon} alt="pagination icon" />
            <img src={PaginationIcon} alt="pagination icon" />
            <img src={PaginationIcon} alt="pagination icon" />
          </div>
          <div>
            <img src={FullscreenToggle} alt="fullscreen toggle icon" />
          </div>
        </div>
        <article>
          <h2>{currentMountain.name}</h2>
          <div className="description">{currentMountain.description}</div>
          <div className="mountains_pogination">
            {new Array(MOUNTAINS_COUNT).fill(1).map((_item, i) => (<img src={mountainIconEmpty} alt="small mountain icon" key={i}/>))}
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default MountainPage;