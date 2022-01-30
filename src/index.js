import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleBlog from './selectors/blogs'
import { addBlog } from './actions/blogs';
import { setTextFilter } from './actions/filters';
import reportWebVitals from './reportWebVitals';

const store = configureStore()

store.dispatch(addBlog({description: 'summer', note: 'my summer vacation', createdAt: 22000 }))
store.dispatch(addBlog({description: 'winter', note: 'where i spent my winter vacation', createdAt: -2000}))
store.dispatch(addBlog({description: 'accer', note: 'my accer vacation', createdAt: -100000}))

store.subscribe(() => {
  const state = store.getState()
  const visibleBlogs = getVisibleBlog(state.blogs, state.filters)
  console.log(visibleBlogs)
})



const jsx = (
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'));
reportWebVitals();