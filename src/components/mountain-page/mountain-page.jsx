import React, { useState } from 'react';
import arrowIcon from '../../img/arrow.png';
import paginationIconEmpty from '../../img/ellipse.png';
import paginationIconFill from '../../img/ellipseFill.png';
import fullscreenToggleFalse from '../../img/btn_fullScreen.png';
import fullscreenToggleTrue from '../../img/btn_fullScreen2.png'
import './mountain-page.css';
import mountainIconEmpty from '../../img/mountain-icon_empty.png';
import mountainIconFill from '../../img/mountain-icon_fill.png';
import {MOUNTAINS_COUNT, PAGINATIONS_COUNT} from '../../const/const';
import { Link } from 'react-router-dom';

const MountainPage = ({mountains, id}) => {
  const [isFullscreen, setFullscreen] = useState(false);
  const [countPagination, setPagination] = useState(0);
  const [currentMountainId, setNextMountain] = useState(Number(id));
  console.log(typeof currentMountainId);
  return (
    <React.Fragment>
      <div className="wrapper" style={{backgroundImage: mountains[currentMountainId].styles.background, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className={isFullscreen ? 'navigation full-width' : 'navigation'}>
          <div className="arrow">
            <Link to="/">
              <img src={arrowIcon} alt="arrow icon" />
            </Link>
          </div>
          <button 
          className="pagination"
          onClick={() => {
            setPagination((prevCount) => 
              countPagination === 2 ? 0 : (prevCount + 1)
            );

            setNextMountain((prevId) => 
              currentMountainId === mountains.length - 1 ? 0 : prevId + 1
            );
          }}>
            {new Array(PAGINATIONS_COUNT).fill(1).map((_item, i) => (
              <img src={countPagination === i ? paginationIconEmpty : paginationIconFill} alt="pagination icon" key={i}/>
            ))}
          </button>
          <div>
            <button 
              className="fullscrin-bttn"
              onClick={() => setFullscreen(!isFullscreen)}>
                <img src={isFullscreen? fullscreenToggleTrue : fullscreenToggleFalse} alt="fullscreen toggle icon" />
            </button>
          </div>
        </div>
        <article className={isFullscreen ? 'hidden' : ''}>
          <h2>{mountains[currentMountainId].name}</h2>
          <div className="description">{mountains[currentMountainId].description}</div>
          <div className="mountains_pogination">
            {new Array(MOUNTAINS_COUNT).fill(1).map((_item, i) => {
              return (i === mountains[currentMountainId].id ? <img src={mountainIconFill} alt="small mountain icon" key={i}/> : <img src={mountainIconEmpty} alt="small mountain icon" key={i}/>);
            })}
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default MountainPage;