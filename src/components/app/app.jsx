import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './app.css';
import MainPage from '../main/main';
import MountainPage from '../mountain-page/mountain-page';
import {mountainsPoints} from '../../mocks/mocks';

const App = () => {
  const [currentPoint, setCurrentPoint ] = useState({currentPoint: 0});

  const buttonClickHandle = (id) => {
    setCurrentPoint(id);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage buttonClickHandle={buttonClickHandle}/>
        </Route>
        <Route path='/:id' exact>
          <MountainPage currentMountain={mountainsPoints[currentPoint]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
