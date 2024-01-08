import axios from "axios";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { RouterProvider } from "react-router-dom";

// index.js or App.js
import { LicenseInfo } from "@mui/x-license-pro";

// Make sure to replace 'YOUR_LICENSE_KEY' with your actual license key
LicenseInfo.setLicenseKey("YOUR_LICENSE_KEY");

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <div className="container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
