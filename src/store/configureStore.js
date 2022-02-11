import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import blogReducer from '../reducers/blogs'
import filtersReducer from '../reducers/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default() => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}