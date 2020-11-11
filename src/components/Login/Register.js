import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import TextInput from "../toolbox/TextInput";
import PasswordInput from "../toolbox/PasswordInput";
import { Register } from "../../redux/actions/loginActions.js";
import { Link } from 'react-router-dom'
import SelectInput from "../toolbox/SelectInput";

function RegisterC({ registerPersons, Register, ...props }) {
  const [registerPerson, setRegisterPerson] = useState({
    ...props.registerPerson,
  });
  useEffect(() => {}, [props.registerPerson]);
  function handleChange(event) {
    const { name, value } = event.target;
    setRegisterPerson((previousPerson) => ({
      ...previousPerson,
      [name]: name === "role" ? parseInt(value, 10) : value,
    }));
  }
  function handleSave(event) {
    event.preventDefault();
    Register(registerPerson);
  }
  return (
    <form onSubmit={handleSave}>
      <h1>Kayıt Ekranı</h1>
      <h6>Sadece Anabilim Dalı Başkanı Kayıt Yapabilir!</h6>
      <TextInput  name="name" label="name" onChange={handleChange} />
      <TextInput  name="email" label="email" onChange={handleChange} />
      <PasswordInput name="password" label="password" onChange={handleChange} />
      <PasswordInput name="c_password" label="c_password" onChange={handleChange} />
   <SelectInput name="role" onChange={handleChange}/>
      <button type="submit" className="btn btn-success">
        Kayıt
      </button>
    </form>
  );
}

function mapStateToProps(state){
    return {
      registerPersons: state.registerReducer,
    };
     
  }
  const mapDispatchToProps = {
    Register,
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(RegisterC);