import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Esportiamo una funzione di inizializzazione per permettere a GTM di avviare l'app
window.ReactApp = {
  init: (selector) => {
    const rootElement = document.querySelector(selector);
    if (rootElement) {
      ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
  },
};
