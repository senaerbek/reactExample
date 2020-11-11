import * as actionTypes from '../actions/actionTypes'
import InitialState from './InitialState'

export default function personListReducer(state = InitialState.getPersons,action){
switch (action.type) {
  case actionTypes.GET_PERSON_INFO_SUCCESS:
    return action.payload;
  default:
    return state;
}    
} 