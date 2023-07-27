// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Route path="/*" element={<App/>} />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
     <App/> 
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);