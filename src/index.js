import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './App';
import { useContext } from 'react';
import { CommentsContext, WithComments } from './components/Context/CommentsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WithComments>
      <App />
    </WithComments>
  </React.StrictMode>
);