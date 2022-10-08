import React from "react";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "../components/common/scroll-to-top/ScrollToTop";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./LogIn/Login";

const AdminRouter = () => {
  return (
    <div>
      <ScrollToTop />
      <Switch>
        <Route exact component={Login} path={"/admin"} />
        <Route component={Dashboard} path={"/admin/dashboard"} />
      </Switch>
    </div>
  );
};

export default AdminRouter;
