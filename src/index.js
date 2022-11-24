import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StyledEngineProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/Phonebook-test">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
