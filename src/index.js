import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleBlog from './selectors/blogs'
import reportWebVitals from './reportWebVitals';

const store = configureStore()

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