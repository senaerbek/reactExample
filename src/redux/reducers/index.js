import {combineReducers} from "redux"
import selectPersonReducer from "./selectPersonReducer"
import personListReducer from "./personListReducer"
import personDetailReducer from "./personDetailReducer"
import personMezuniyetDetailReducer from "./personMezuniyetDetailReducer"
import createPersonReducer from "./createPersonReducer"
import loginReducer from "./LoginReducers/loginReducer"
import RegisterReducer from "./LoginReducers/RegisterReducer"

const rootReducer = combineReducers({
    selectPersonReducer,
    personListReducer,
    personDetailReducer,
    personMezuniyetDetailReducer,
    createPersonReducer,
    loginReducer,
    RegisterReducer
})

export default rootReducer;