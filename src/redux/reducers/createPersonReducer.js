import * as actionTypes from '../actions/actionTypes'
import InitialState from './InitialState'

export default function createPersonReducer(state = InitialState.createPerson,action){
  switch (action.type) {
    case actionTypes.CREATE_PERSON_SUCCESS:
      return action.payload;
    default:
      return state;
  }
} 