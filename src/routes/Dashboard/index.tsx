import React from "react";

import * as DashboardStyles from "./styles";
import { SecondaryButton, GreyButton } from "styles/Button";

const Dashboard = () => {
  return (
    <DashboardStyles.Wrapper>
      <DashboardStyles.Header>
        <h3>
          Hello
          <span>Jimmy,</span>
        </h3>
        <h1>What do you want to do today?</h1>
      </DashboardStyles.Header>
    </DashboardStyles.Wrapper>
  );
};

export default Dashboard;
