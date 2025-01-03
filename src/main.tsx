import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { Provider } from "./components/context/Meals.tsx";
createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>
);
