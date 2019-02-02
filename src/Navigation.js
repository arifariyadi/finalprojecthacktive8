import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Pages/Home'
import AboutUs from './components/Pages/AboutUs'
import SusunanRedaksi from './components/Pages/SusunanRedaksi'
import PembelianMajalah from './components/Pages/PembelianMajalah'
import Post from './components/Reusable/Post'

export default class Navigation extends Component{
  render(){
    return(
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="Home" component={Home} hideNavBar initial={true} />
          <Scene key="Post" component={Post} hideNavBar />
          <Scene key="AboutUs" component={AboutUs} hideNavBar />
          <Scene key="SusunanRedaksi" component={SusunanRedaksi} hideNavBar />
          <Scene key="PembelianMajalah" component={PembelianMajalah} hideNavBar />
        </Scene>
      </Router>
    );
  }
}
