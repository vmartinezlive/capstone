import React from 'react';
import background from '../assets/images/singinbkgrnd.png';
import logo from '../assets/logos/logo2.png';


function LandingPage(){
  return{
    <div>
      <style jsx>{`
        .email {
          position: absolute;
          width: 393px;
          height: 77px;
          left: 524px;
          top: 475px;
        }
        .password {
          position: absolute;
          width: 393px;
          height: 77px;
          left: 524px;
          top: 604px;
        }
        .submit{
          position: absolute;
          width: 393px;
          height: 77px;
          left: 524px;
          top: 724px;
        }
        .firstP{
          position: absolute;
          width: 272px;
          height: 23px;
          left: 581px;
          top: 816px;
          font-family: Raleway;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 23px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #97775A;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .secondP{
          position: absolute;
          width: 391px;
          height: 23px;
          left: 528px;
          top: 934px;
          font-family: Raleway;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 23px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #97775A;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
        <img className="background" src={background} alt="background picture of barrel, green grapes and wine bottles"></img>
        <img className="logo" src={logo} alt="cellar tracker"></img>
        <form>
          <input type="email" className="email"   placeholder="Enter email">
          <input type="password" className="password"  placeholder="Password">
          <button type="submit" className="submit">Log In</button>
          <p className="firstP">Forgot Password</p>
          <p className="secondP">Don’t have any account? Sign Up</p>
        </form>
    </div>
  }
}
export default Landing;
