import React from 'react'

const Form = () => {
  state = {
    title: title, // Need to get from the Redux Store
    type: type // Need to get from the Redux Store
  }
  
  return (
    <React.Fragment>
      <div className="form">
        <div><span className="title">Email:</span><input className="input email" type="email" name="emailaddress" placeholder="Your email here"></input></div>
          <br></br>
        <div><span className="title">Password:</span> <input className="input pass" type="password" name="pwd" placeholder="Enter your password"></input></div>
          <br></br>
        <div><span className="title">Confirm Password:</span><input className="input pass" type="password" name="pwdCheck" placeholder="Confirm your password"></input></div>
      </div>
    </React.Fragment>
  )
}

export default Form