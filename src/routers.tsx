import React from "react";
import { Switch, Route } from "react-router-dom";

import { routeUrls } from "routeUrls";
import Dashboard from "routes/Dashboard";

const NotFound = () => <p>404 -Not Found</p>;

const MainRouters: React.FC = () => (
  <Switch>
    <Route exact={true} path={routeUrls.dashboard} component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default MainRouters;
