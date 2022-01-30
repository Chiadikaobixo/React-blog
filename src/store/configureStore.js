import {createStore, combineReducers} from 'redux'
import blogReducer from '../reducers/blogs'
import filtersReducer from '../reducers/filters'

export default() => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}