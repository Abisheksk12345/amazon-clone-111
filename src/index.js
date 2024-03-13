import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FunctionComponent from './function';
import 'bootstrap'
import ClassComponent from './class';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <FunctionComponent/>
   <ClassComponent/>
  </React.StrictMode>
)

