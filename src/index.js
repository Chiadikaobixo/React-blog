import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetAddBlog, startSetAddTwitter} from './actions/blogs'
import reportWebVitals from './reportWebVitals';
import { login, logout, loginTwitter, logoutTwitter } from './actions/auth'
import './firebase/firebase';
import { onAuthStateChanged, getAuth} from 'firebase/auth'
import './styles.scss'
import LoadingPage from './components/LoadingPage';


const store = configureStore()

const jsx = (
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
)
ReactDOM.render(<LoadingPage />,document.getElementById('root'));


let hasRendered = false
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
}
reportWebVitals();

const auth = getAuth()

onAuthStateChanged( auth, user => {
    if (user){
        store.dispatch(loginTwitter(user.uid))
        store.dispatch(startSetAddBlog()).then(() => {
            renderApp()
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    }else if(user){
      store.dispatch(login(user.uid))
        store.dispatch(startSetAddTwitter()).then(() => {
            renderApp()
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    }else{
        store.dispatch(logout())
        store.dispatch(logoutTwitter())
        renderApp()
        history.push('/')
    }
})