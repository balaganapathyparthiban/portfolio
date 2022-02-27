import React from "react";
import ReactDOM from "react-dom";

import BgLogoSvg from "./assets/images/bg-logo.svg?component";

import "./main.scss";

const App = () => {
  return (
    <div className="h-screen w-full">
      <div className="h-auto w-full border-b-2 px-4 py-2">
        <BgLogoSvg width={40} height={40} />
      </div>
      <div className="flex h-[calc(100%-58px)] w-full flex-col items-center justify-center">
        <p className="break-words px-4 text-2xl font-semibold text-gray-400">
          Work in progress, Check out my other works.
        </p>
        <div className="mt-4 flex h-auto w-auto items-center px-4">
          <a
            className="mr-2 w-auto rounded-lg border p-2 font-semibold text-blue-800 shadow-lg"
            href="https://easyscrum.bginnovate.com"
            target="_blank"
          >
            Easy Scrum
            <img
              src="/images/easyscrum.png"
              className="h-auto w-40 rounded-lg"
            />
          </a>
          <a
            className="w-auto rounded-lg border p-2 font-semibold text-blue-800 shadow-lg"
            href="https://cloudbox.bginnovate.com"
            target="_blank"
          >
            Cloud Box
            <img
              src="/images/cloudbox.png"
              className="h-auto w-40 rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
