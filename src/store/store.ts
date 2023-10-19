import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const initialState = {
    test: 0,
}

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case '': {
            return {
                ...state,
                test: action.payload
            }
        }
        default:
            return state

    }
}

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)))

export default store