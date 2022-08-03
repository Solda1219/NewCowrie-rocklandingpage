import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "utility/web3React";
import { ThemeContextProvider } from "contexts/ThemeContext";
import { ModalProvider } from "@pancakeswap-v3/uikit";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import storePersist from "./redux/";
import { PersistGate } from "redux-persist/es/integration/react";

import * as serviceWorker from "./serviceWorker";
import Config from "./configure";
import Spinner from "./components/spinner/Spinner";
import "./assets/fonts/feather/css/feather.css";
import "./assets/fonts/fontawesome/scss/font-awesome.scss";
import "./assets/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

const App = lazy(() => import("./App/App"));

const root = document.getElementById("root");

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={storePersist.store}>
      <PersistGate persistor={storePersist.persistor}>
        <SnackbarProvider maxSnack={3}>
          <ThemeContextProvider>
            <ModalProvider>
              <BrowserRouter basename={Config.basename}>
                <Suspense fallback={Spinner}>
                  <App />
                </Suspense>
              </BrowserRouter>
            </ModalProvider>
          </ThemeContextProvider>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  </Web3ReactProvider>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
