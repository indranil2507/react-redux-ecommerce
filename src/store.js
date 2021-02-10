import {createStore, applyMiddleware,combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers"
import { orderReducer } from "./reducers/orderReducer";

const initialState={};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE|| compose;

const store= createStore(
    combineReducers({
        products: productsReducer,
        cart:cartReducer,
        order:orderReducer
    }),
    initialState,
    
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
