import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import {getPersons} from "../../redux/actions/personActions"
import {createPerson} from "../../redux/actions/personActions"
import TextInput from "../toolbox/TextInput"
import FileInput from "../toolbox/FileInput"
import Navi from "../Navbar/Navbar"
import EmailInput from "../toolbox/EmailInput"


function BasvuruEkle({
  createPerson,
  getPersons,
  persons,
  history,
  ...props

}) {
  const [person, setPerson] = useState({ ...props.person });
  useEffect(() => {
    getPersons();
    setPerson({ ...props.person });
  }, [props.person]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPerson((previousPerson) => ({
      ...previousPerson,
      [name]: name === "id" ? parseInt(value, 10) : value,
    }));
  }
  function handleSave(event) {
    event.preventDefault();
    createPerson(person);
  }
  
  return (
    <form onSubmit={handleSave}>
      <h3> Başvuru Formu </h3>
      <TextInput
        name="ad"
        label="ad"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="soyad"
        label="soyad"
        value={persons.ad}
        onChange={handleChange}
      />
      <EmailInput
        name="email"
        label="email"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="tel"
        label="tel"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="departman"
        label="departman"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="diplomaNot"
        label="diplomaNot"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="ulkeSec"
        label="ulkeSec"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="universiteSec"
        label="universiteSec"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="dusunce"
        label="dusunce"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="pasaportNumber"
        label="pasaportNumber"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="kimlik"
        label="kimlik"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="cinsiyet"
        label="cinsiyet"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="dogumTarih"
        label="dogumTarih"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="duzenlemeTarih"
        label="duzenlemeTarih"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="gecerlilikTarih"
        label="gecerlilikTarih"
        value={persons.ad}
        onChange={handleChange}
      />
      <TextInput
        name="uyruk"
        label="uyruk"
        value={persons.ad}
        onChange={handleChange}
      />{" "}
      <TextInput
        name="pasaportTur"
        label="pasaportTur"
        value={persons.ad}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-success">
        ekle
      </button>
    </form>
  );
}

function mapStateToProps(state){
  return{
 // person:  state.createPersonReducer,
    persons : state.personListReducer
  }
   
}
const  mapDispatchToProps={
    getPersons,
    createPerson
}

export default connect(mapStateToProps,mapDispatchToProps)(BasvuruEkle);