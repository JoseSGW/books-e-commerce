import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../reducers/productsReducer";
import { ShoppingCartReducer } from "../reducers/ShoppingCartReducer";
/* import { categoriesReducer } from "../reducers/categoriesReducer";
import { loadingIngredients } from "../reducers/loadingIngredients";
import { loadingReducer } from "../reducers/loadingReducer"; */
/* import { usersReducer } from "../reducers/usersReducer";
import { storesReducer } from "../reducers/storesReducer";
import { reviewsReducer } from "../reducers/ReviewsReducer";
import { loaderReducer } from '../reducers/loaderReducer';
import { statisticsReducer } from '../reducers/statisticsReducer'
import { ordersReducer } from '../reducers/ordersReducer';  */


const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;


const reducers = combineReducers({
    products: productReducer,
    shoppingCart: ShoppingCartReducer
    /* loading: loadingReducer,
    categories: categoriesReducer,
    ingredients: loadingIngredients,
    users: usersReducer,
    stores: storesReducer,
    reviews: reviewsReducer,
    loader: loaderReducer,
    orders: ordersReducer,
    statistics: statisticsReducer */
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
