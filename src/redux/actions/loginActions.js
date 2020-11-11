import * as actionTypes from './actionTypes'
import alertify from 'alertifyjs';


export function loginSuccess(createPerson){
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload:createPerson
    }
}

export function loginApi(createPerson){
    return fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body:JSON.stringify(createPerson),
      headers: {'Content-Type': 'application/json'},
      //headers...
    }).then(handleResponse).then(
       response=>  localStorage.setItem("token", response.token)
    
    )
    .catch(handleError);
}



export function Login(createPerson){
    return function(dispatch){
        loginApi(createPerson)
        .then(response=>console.log(response),
        console.log("sadfsfd")
        )
        .catch(response => {throw response})
    }
}



export function registerSuccess(createPerson){
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload:createPerson
    }
}


export function registerApi(createPerson){
    return fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body:JSON.stringify(createPerson),
      headers: {'Content-Type': 'application/json',
      'Authorization':"Bearer "+ localStorage.getItem("token")},
      //headers...
    }).then(handleResponseReg)
    .catch(handleError);
}



export function Register(createPerson){
    return function(dispatch){
        registerApi(createPerson)
        .then(response => dispatch(registerSuccess(response)))
        .catch(response => {throw response})
    }
    
}



export async function handleResponse(response){
 if (response.ok) {
    alertify.success("Yönlendiriliyorsunuz")
    setTimeout(function(){ 
        window.location = "/persons";
        },2000);
     return response.json();
    
     
 }
 const error = await response.text();
throw new Error(error);
}

export async function handleError(error){
    console.error("api hatası");
    alertify.error("hata")
}


export async function handleResponseReg(response){
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
   
