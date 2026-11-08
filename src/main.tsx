import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Self-hosted Geist and Geist Mono (variable, latin subsets load on demand). No third-party font request.
import '@fontsource-variable/geist/wght.css';
import '@fontsource-variable/geist-mono/wght.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
