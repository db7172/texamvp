import React, { Fragment } from "react";
import TopPane from "../TopPane/TopPane";
import { Switch, Route } from "react-router-dom";
import "./rightPane.css";
import HomePage from "../Homepage/HomePage";
import ActivityPage from "../ActivityPage/ActivityPage";
import CallRequests from "../CallRequests/CallRequests";

const rightPane = () => {
  return (
    <div className="right-pane">
      <TopPane />
      <Switch>
        <Route
          path="/admin/dashboard/homepage"
          render={() => (
            <Fragment>
              <HomePage />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/activity"
          render={() => (
            <Fragment>
              <ActivityPage />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/requests"
          render={() => (
            <Fragment>
              <CallRequests />
            </Fragment>
          )}
        />
      </Switch>
    </div>
  );
};

export default rightPane;
