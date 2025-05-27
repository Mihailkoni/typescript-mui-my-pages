import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import  List  from "./list/List";
import  Main  from "./main/Main";
import Company from './company/Company';
//import Chart from "./chart/Chart";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "/company/:id",
    element: <Company />,
  },
  {
    path: "/list",
    element: <List />,
  },
  // {
  //   path: "/chart",
  //   element: <Chart />,
  // }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);