import * as actionTypes from '../actions/actionTypes'
import InitialState from './InitialState'

export default function personMezuniyetDetailReducer(state = InitialState.mezuniyetDetail,action){
switch (action.type) {
  case actionTypes.GET_PERSON_MEZUNİYET_DETAIL_SUCCESS:
    return action.payload;
  default:
    return state;
}    
} 