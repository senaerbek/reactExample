import * as actionTypes from '../actions/actionTypes'
import InitialState from './InitialState'

export default function personDetailReducer(state = InitialState.personDetail,action){
switch (action.type) {
  case actionTypes.GET_PERSON_DETAIL_SUCCESS:
    return action.payload;
  default:
    return state;
}    
} 