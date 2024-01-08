import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { GlobalToastProvider } from "./Context/ToastContext";
import { AuthProvider } from "./Context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <GlobalToastProvider> */}
    <AuthProvider>
      <App />
    </AuthProvider>

    {/* </GlobalToastProvider> */}
  </React.StrictMode>
);
