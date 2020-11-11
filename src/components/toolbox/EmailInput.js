import React from "react"

const EmailInput = ({name, label, onChange, placeHolder, value, error})=>{
let wrapperClass = "form-group"
if(error&&error.length>0){
    wrapperClass += " has-error"
}
return (
  <div className={wrapperClass}>
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <input
        type="email"
        name={name}
        className="form-control"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        required
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
);
}

export default EmailInput;