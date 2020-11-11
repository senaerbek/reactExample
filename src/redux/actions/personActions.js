import * as actionTypes from './actionTypes'
import alertify from 'alertifyjs';

export function selectPerson(person){
    return{
        type:actionTypes.SELECT_PERSON,
        payload:person
    }
}

export function getPersonInfoSuccess(persons){
    return{
        type:actionTypes.GET_PERSON_INFO_SUCCESS,
        payload:persons
    }
}

export function getPersons(id){
    return function(dispatch){
        let url ="http://127.0.0.1:8000/api/admin"
        if(id){
            url = url + "/"+ id;
        }
        return fetch(url,{ headers: {
            'Authorization':"Bearer "+ localStorage.getItem("token")
          }})
        .then(response => response.json())
        .then(response => dispatch(getPersonInfoSuccess(response)));
    }
}

export function getPersonDetailSuccess(personDetail){
    return {
        type: actionTypes.GET_PERSON_DETAIL_SUCCESS,
        payload:personDetail
    }
}

export function getPersonDetail(id){

    return function(dispatch){
        let url = "http://127.0.0.1:8000/api/passportDetails/" + id;
        return fetch(url,{ headers: {
            'Authorization':"Bearer "+ localStorage.getItem("token")
          }})
        .then(response => response.json())
        .then(response => dispatch(getPersonDetailSuccess(response)));
    }
 
}


export function getPersonMezuniyetDetailSuccess(mezuniyetDetail){
    return {
        type: actionTypes.GET_PERSON_MEZUNİYET_DETAIL_SUCCESS,
        payload:mezuniyetDetail
    }
}


export function getPersonMezuniyetDetail(id){
    return function(dispatch){
        let url = "http://127.0.0.1:8000/api/details/" + id;
        return fetch(url,{ headers: {
            'Authorization':"Bearer "+ localStorage.getItem("token")
          }})
        .then(response => response.json())
        .then(response => dispatch(getPersonMezuniyetDetailSuccess(response)));
    }
 
}


export function createPersonSuccess(createPerson){
    return {
        type: actionTypes.CREATE_PERSON_SUCCESS,
        payload:createPerson
    }
}

export function createPersonApi(createPerson){
    return fetch("http://127.0.0.1:8000/api/kisiselBilgiler", {
      method: "POST",
      body:JSON.stringify(createPerson),
      headers: {'Content-Type': 'application/json'},
      //headers...
    }).then(handleResponse)
    .catch(handleError);
}

export function createPerson(createPerson){
    return function(dispatch){
        createPersonApi(createPerson)
        .then(response => dispatch(createPersonSuccess(response)))
        .catch(response => {throw response})
    }
}

export async function handleResponse(response){
    if (response.ok) {
        alertify.success("Başarıyla Eklendi")
        setTimeout(function(){ 
           window.location.href=window.location.href;  
            }
           
           , 2000);
        return response.json();

    }
 const error = await response.text();
throw new Error(error);
}

export async function handleError(error){
    console.error("api hatası");
    throw error;
}

