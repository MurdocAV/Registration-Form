import React from 'react'

const Form = (props) => {
  return (
    <React.Fragment>
      <div>
        <span className="title">{props.title}</span>
        <input className="input usrName" type="String" name="usrName" placeholder={`Your ${props.type} here`}></input>
      </div>
    </React.Fragment>
  )
}

export default Form