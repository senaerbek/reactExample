import * as actionTypes from '../actions/actionTypes'
import InitialState from './InitialState';

export default function selectPersonReducer(state = InitialState.selectedPerson,action){
switch (action.type) {
  case actionTypes.SELECT_PERSON:
    return action.payload;
  default:
    return state;
}    
}