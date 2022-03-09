import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// store
import { store, persistor } from './store'
import { PersistGate } from './../node_modules/redux-persist/es/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
