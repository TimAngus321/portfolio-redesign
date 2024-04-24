import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import Router from "./app/components/App";
import { BrowserRouter } from "react-router-dom";
import {Config} from "./serviceWorker";
import { toast } from "react-toastify";

const container = document.querySelector("#root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
);

const config: Config = {
  onUpdate: (registration) => {
      if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          toast.success(`App has been updated!`, {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            autoClose: 2500,
          });
          window.location.reload();
      }
  },
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// I've modified this to check for new version of App and refresh page
serviceWorker.register(config);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
