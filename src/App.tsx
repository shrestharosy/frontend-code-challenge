import React from "react";
import { Global } from "@emotion/core";

import * as AppStyles from "./styles";
import { GlobalStyle } from "styles/Global";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <AppStyles.App>
        <Sidebar />
        <Main>
          <Dashboard />
        </Main>
      </AppStyles.App>
    </>
  );
}

export default App;
