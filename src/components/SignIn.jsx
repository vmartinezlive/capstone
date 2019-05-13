import React from 'react';
import background from '../assets/images/6.png';


function SignIn(){
  return(
    <div>
      <style>{`
      .one{
        position: absolute;
        left: 9.81%;
        right: 64.23%;
        top: 10.09%;
        bottom: 83.98%;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #F2BF91;
      }
      .firstName {
        position: absolute;
        left: 8.92%;
        right: 50.15%;
        top: 13.22%;
        bottom: 78.77%;
      }
      .lasttName {
        position: absolute;
        left: 56.78%;
        right: 4.5%;
        top: 13.22%;
        bottom: 78.77%;
      }
      .password{
        position: absolute;
        left: 8.92%;
        right: 50.15%;
        top: 24.25%;
        bottom: 67.74%;
      }
      .confrim-password{
        position: absolute;
        left: 56.78%;
        right: 4.5%;
        top: 24.25%;
        bottom: 67.74%;
      }
      .firstName2{
        position: absolute;
        left: 8.92%;
        right: 50.15%;
        top: 45.99%;
        bottom: 45.99%;
      }
      .two{
        position: absolute;
        left: 9.22%;
        right: 64.82%;
        top: 42.87%;
        bottom: 51.2%;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #F2BF91;
      }
      .firstName2{
        position: absolute;
        left: 8.92%;
        right: 50.15%;
        top: 45.99%;
        bottom: 45.99%;
      }
      .lastName2{
        position: absolute;
        left: 56.78%;
        right: 4.5%;
        top: 45.99%;
        bottom: 45.99%;
      }
      .password2{
        position: absolute;
        left: 9.07%;
        right: 50%;
        top: 57.44%;
        bottom: 34.55%;
      }
      .confirm-password2 {
        position: absolute;
        left: 59.64%;
        right: 20.52%;
        top: 60.25%;
        bottom: 37.36%;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #5A4335;
      }
      .submit {
        position: absolute;
        width: 393px;
        height: 77px;
        left: 523px;
        top: 747px;
      }
      .frame{
        position: absolute;
        width: 1356px;
        height: 961px;
        left: 40px;
        top: 31px;
      }
      `}</style>
    <img className="background2" src={background} alt="background picture of barrel, green grapes and wine bottles"></img>
    <div className="frame"></div>
    <h4 classNmae="one">user one</h4>
      <input type="text" className="firstName"   placeholder="Enter first name">
      <input type="text" className="lastName"   placeholder="Enter last name">
      <input type="password" className="password"   placeholder="Enter email">
      <input type="email" className="confirm-password"   placeholder="Confirm email">
      <br/>
    <h4 classNmae="two">user two</h4>
      <input type="text" className="firstName2"   placeholder="Enter first name">
      <input type="text" className="lastName2"   placeholder="Enter last name">
      <input type="password" className="password2"   placeholder="Enter email">
      <input type="email" className="confirm-password2"   placeholder="Confirm email">
      <br/>
      <button type="submit" calssName="submit">Submit</button>
    </div>
  )
}
export default SignIn;
