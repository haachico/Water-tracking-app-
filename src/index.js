import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { waterContext, Provider } from "./useContext/waterContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { waterContext };

root.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
