import React from "react";

import * as AppStyles from "./styles";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <AppStyles.App>
      <Sidebar />
      <Main>
        <Dashboard /> 
      </Main>
    </AppStyles.App>
  );
}

export default App;
