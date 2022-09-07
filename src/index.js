import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import CastProvider from "./components/GoogleCast/CastProvider.tsx";

// ReactDOM.render(
//   <ContextProvider>
//     {/* <CastProvider> */}
//     <App />
//     {/* </CastProvider> */}
//   </ContextProvider>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ContextProvider>
    <CastProvider>
      <App />
    </CastProvider>
  </ContextProvider>
);
