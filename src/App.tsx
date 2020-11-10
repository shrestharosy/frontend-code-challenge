import React from "react";
import { Global } from "@emotion/core";

import * as AppStyles from "./styles";
import { GlobalStyle } from "styles/Global";
import Sidebar from "./components/Sidebar";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <AppStyles.App>
        <Sidebar />
        <Dashboard />
      </AppStyles.App>
    </>
  );
}

export default App;
