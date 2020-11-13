import React from "react";
import { Global } from "@emotion/core";

import * as AppStyles from "./styles";
import { GlobalStyle } from "styles/Global";
import Sidebar from "./components/Sidebar";
import MainRouters from "routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <AppStyles.App>
        <BrowserRouter>
          <Sidebar />
          <MainRouters />
        </BrowserRouter>
      </AppStyles.App>
    </>
  );
}

export default App;
