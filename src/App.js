import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
