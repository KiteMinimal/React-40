// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { store } from "./components/Store/Store";



createRoot(document.getElementById("root")).render(
//   <provider store={store}>
    <App />
//   {/* </provider> */}
);
