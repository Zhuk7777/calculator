import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import { store } from './store';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global/>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

