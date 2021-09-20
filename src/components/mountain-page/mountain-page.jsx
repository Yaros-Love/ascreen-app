import React from 'react';
import ArrowIcon from '../../img/arrow.png';
import PaginationIcon from '../../img/ellipse.png';
import FullscreenToggle from '../../img/btn_fullScreen.png';
import './mountain-page.css';
import mountainIconEmpty from '../../img/mountain-icon_empty.png';
import {MOUNTAINS_COUNT} from '../../const/const';
import { Link } from 'react-router-dom';

const MountainPage = ({mountains, id}) => {
  return (
    <React.Fragment>
      <div className="wrapper" style={{backgroundImage: mountains[id].styles.background, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="navigation">
          <div className="arrow">
            <Link to="/">
              <img src={ArrowIcon} alt="arrow icon" />
            </Link>
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
          <h2>{mountains[id].name}</h2>
          <div className="description">{mountains[id].description}</div>
          <div className="mountains_pogination">
            {new Array(MOUNTAINS_COUNT).fill(1).map((_item, i) => (<img src={mountainIconEmpty} alt="small mountain icon" key={i}/>))}
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default MountainPage;