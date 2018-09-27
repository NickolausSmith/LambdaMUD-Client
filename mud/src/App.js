import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

import Home from './Components/Home'
import Login from './Components/Login';
import Register from './Components/Register';
import Play from './Components/Play';


import img from '../src/Images/Wallback.png';

const Main = styled.div`
display: flex;
justify-content: center;
background-image:url(${img});

width: 100%;
height: 1080px;
`


class App extends Component {
  render() {
    return (
      <Main>
       <Route exact path='/' component={Home}></Route>
       <Route exact path='/register' component={Register}></Route>
       <Route exact path='/login' component={Login}></Route>
       <Route exact path='/play' component={Play}></Route>
       
      </Main>
    );
  }
}

export default App;
