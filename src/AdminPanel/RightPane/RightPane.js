import React, { Fragment } from "react";
import TopPane from "../TopPane/TopPane";
import { Switch, Route } from "react-router-dom";
import "./rightPane.css";
import HomePage from "../Homepage/HomePage";
import ActivityPage from "../ActivityPage/ActivityPage.tsx";
import CallRequests from "../CallRequests/CallRequests";
import EventPage from "../EventPage/EventPage";
import RetreatPage from "../RetreatPage/RetreatPage";
import WorkcationPage from "../WorkcationPage/WorkcationPage";
import DestinationPage from "../DestinationPage/DestinationPage";
import PopularService from "../PopularService/PopularService";
import ServiceOfTheMonth from "../ServiceOfTheMonth/ServiceOfTheMonth";
import Vendor from "../Vandor/Vendor";
import RelaunchedService from "../RelaunchedService/RelaunchedService";
import UserActivity from "../User/UserActivity";
import UserDetails from "../User/UserDetails";

const rightPane = () => {
  return (
    <div className="right-pane">
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
          path="/admin/dashboard/event"
          render={() => (
            <Fragment>
              <EventPage />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/retreat"
          render={() => (
            <Fragment>
              <RetreatPage />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/workcation"
          render={() => (
            <Fragment>
              <WorkcationPage />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/destination"
          render={() => (
            <Fragment>
              <DestinationPage />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/popularservice"
          render={() => (
            <Fragment>
              <PopularService />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/serviceofthemonth"
          render={() => (
            <Fragment>
              <ServiceOfTheMonth />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/vendor"
          render={() => (
            <Fragment>
              <Vendor />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/relaunchservice"
          render={() => (
            <Fragment>
              <RelaunchedService />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/customer"
          render={() => (
            <Fragment>
              <UserActivity />
            </Fragment>
          )}
        />
        <Route
          path="/admin/dashboard/servicecustomer"
          render={() => (
            <Fragment>
              <UserDetails />
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
