import React from 'react';
import background from '../assets/images/6.png';


function SignIn(){
  return(
    <div>
    <img className="background2" src={background} alt="background picture of barrel, green grapes and wine bottles"></img>
    <h4>user one</h4>
      <input type="text" className="firstName"   placeholder="Enter first name">
      <input type="text" className="lastName"   placeholder="Enter last name">
      <input type="email" className="email"   placeholder="Enter email">
      <input type="email" className="confirm-email"   placeholder="Confirm email">
    </div>
  )
}
export default SignIn;
