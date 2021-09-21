import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../main/main';
import MountainPage from '../mountain-page/mountain-page';
import { useSelector } from 'react-redux';

const App = () => {
  const mountains = useSelector((state) => state.mountainsList)
  
  return (
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/:id' render={(prop) => <MountainPage mountains={mountains} id={prop.match.params.id}/>} />
      </Switch>
  );
};

export default App;
