import React from "react";
import { Global } from "@emotion/core";

import * as AppStyles from "./styles";
import { GlobalStyle } from "styles/Global";
import Sidebar from "./components/Sidebar";
import MainRouters from "routers";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <AppStyles.App>
        <HashRouter basename="/">
          <Sidebar />
          <MainRouters />
        </HashRouter>
      </AppStyles.App>
    </>
  );
}

export default App;
