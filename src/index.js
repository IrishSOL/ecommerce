import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';
import ShopContextProvider from './Context/ShopContext';

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
);
