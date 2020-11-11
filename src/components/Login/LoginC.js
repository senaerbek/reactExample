import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import TextInput from "../toolbox/TextInput";
import PasswordInput from "../toolbox/PasswordInput";
import {Login} from "../../redux/actions/loginActions.js"
import { Link } from 'react-router-dom'
import EmailInput from "../toolbox/EmailInput";


function LoginC({
    loginPersons,//state
    Login, //actions
    ...props
}) {

const [loginPerson, setLoginPerson] = useState({...props.loginPerson});
useEffect(() => {

}, [props.loginPerson]);

function handleChange(event) {
  const { name, value } = event.target;
  setLoginPerson((previousPerson) => ({
    ...previousPerson,
    [name]: name === "id" ? parseInt(value, 10) : value,
  }));
}

  function handleSave(event) {
    event.preventDefault();  
    Login(loginPerson)
  
  }

  return (
    <form onSubmit={handleSave}>
      <h1>Giriş</h1>
      <EmailInput  name="email" label="email" onChange={handleChange} />
      <PasswordInput name="password" label="password" onChange={handleChange} />
      <button type="submit" className="btn btn-success">
        Giriş Yap
      </button>
    </form>
  );
}

function mapStateToProps(state){
    return {
      LoginPersons: state.loginReducer,
    };
     
  }
  const mapDispatchToProps = {
    Login,
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(LoginC);