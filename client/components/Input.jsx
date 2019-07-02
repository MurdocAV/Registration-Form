import React from 'react'

const Form = (props) => {
  return (
    <React.Fragment>
      <div>
        <span className="title">User Name:</span>
        <input className="input usrName" type="String" name="usrName" placeholder="Your name here"></input>
      </div>
    </React.Fragment>
  )
}

export default Form