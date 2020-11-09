import React from "react";

import * as AppStyles from "./styles";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <AppStyles.App>
      <Sidebar />
      <Main>
        <h1>Ola</h1>
      </Main>
    </AppStyles.App>
  );
}

export default App;
