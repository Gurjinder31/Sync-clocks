import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/index.css';
import App from './components/App';
import { StateProvider } from './context/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
