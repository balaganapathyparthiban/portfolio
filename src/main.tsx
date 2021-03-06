import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import RouteConst from "./constants/routes";
import RouteList from "./routes/routes";

import './assets/styles/global.scss'
import { RecoilRoot } from "recoil";

const App: React.FC = () => {

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  }, [])

  return (
    <Routes>
      {
        RouteList.map(r => (
          <Route key={r.path} path={r.path} element={<r.component />} />
        ))
      }
      <Route path={RouteConst.unknown} element={<Navigate to={RouteConst.landing} />} />
    </Routes>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
