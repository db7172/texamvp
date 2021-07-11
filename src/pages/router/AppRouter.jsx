import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ROUTES } from "../../constant/comman.const";
import NotFound from "../404/NotFound";
import Home from "../Home";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact component={NotFound} path={ROUTES.NOT_FOUND} />
      <Route exact component={Home} path={ROUTES.HOME} />
      <Redirect to={ROUTES.NOT_FOUND} />
    </Switch>
  );
};

export default AppRouter;
