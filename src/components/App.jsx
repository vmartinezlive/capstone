import React, { Component } from 'react';
import LandingPage from 'LandingPage';
import SignIn from 'SignIn';
import background from '../assets/images/app.png';
import logo from '../assets/logos/logo2.png';
import SideBar from './SideBar';
import { Switch, Link, Route } from 'react-router-dom';
import Error404 from '.Error404';



class App extends Components{

  render(){
    return(
      <div>
        <style jsx>{`
          .background{
            position: absolute;
            width: 1532px;
            height: 1051px;
            left: -92px;
            top: -27px;
          }
          .logoDrawer{
            position: absolute;
            width: 260px;
            height: 143px;
            left: 1162px;
            top: 39px;
          }
          `}</style>
        <LandingPage/>
        <SignIn/>
        <img className="background" src={background} alt="background picture of wine rack glasses and a large picture of green grapes"></img>
        <img className="logo" src={logo} alt="cellar tracker"></img>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route component={Error404} />

        </Switch>
        <SideBar/>




      </div>

    )
  }
}

export default App;
