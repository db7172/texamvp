import { Redirect, Route, Switch } from "react-router-dom";
import ScrollToTop from "../../components/common/scroll-to-top/ScrollToTop";
import { ROUTES } from "../../constant/comman.const";
import NotFound from "../404/NotFound";
import Activites from "../activities/index";
import Activity from "../activity";
import DestinationPage from "../destination";
import Retreats from "../retreats";
import EventPage from "../eventPage";
import Events from "../events";
import Home from "../Home";
import RetreatPage from "../retreat";
import ViewMoreDetailsForActivity from "../view-more/ViewMoreDetailsForActivity";
import ViewMoreDetailsForEvent from "../view-more/ViewMoreDetailsForEvent";
import WorkationPage from "../workation";
import Workcations from "../workations";
import Influencer from "../influencer/home";
import Dashboard from "../influencer/dashboard";
import InfluencerSignup from "../influencer/signup/InfluencerSignup";
import Application from "../influencer/application/Application";
import ActivityForm from "../influencer/form/activity/ActivityForm";
import EventForm from "../influencer/form/event/EventForm";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact component={NotFound} path={ROUTES.NOT_FOUND} />
        <Route exact component={Home} path={ROUTES.HOME} />

        {/* Destination page */}
        <Route component={DestinationPage} path={ROUTES.DESTINATION} />

        {/* workation */}
        <Route component={Workcations} path={ROUTES.WORKCATIONS} />

        {/* Retreat page */}
        <Route component={Retreats} path={ROUTES.RETREATS} />

        {/* Activity page */}
        <Route exact component={Activity} path={ROUTES.ACTIVITY_IN_CITY} />
        <Route component={Activity} path={ROUTES.ACTIVITY} />

        {/* Activities page */}
        <Route component={Activites} path={ROUTES.ACTIVITES} />

        {/* Event Page */}
        <Route exact component={EventPage} path={ROUTES.EVENT_IN_CITY} />
        <Route component={EventPage} path={ROUTES.EVENT} />

        {/* Events */}
        <Route component={Events} path={ROUTES.EVENTS} />

        {/* Retreat Page */}
        <Route exact component={RetreatPage} path={ROUTES.RETREAT_IN_CITY} />
        <Route component={RetreatPage} path={ROUTES.RETREAT} />

        {/* Workation Page */}
        <Route
          exact
          component={WorkationPage}
          path={ROUTES.WORKATION_IN_CITY}
        />
        <Route component={WorkationPage} path={ROUTES.WORKATION} />

        {/* View More */}
        <Route
          component={ViewMoreDetailsForActivity}
          path={ROUTES.VIEW_MORE_DETAILS_ACTIVITY}
        />
        <Route
          component={ViewMoreDetailsForEvent}
          path={ROUTES.VIEW_MORE_DETAILS_EVENT}
        />

        {/* influencer */}

        <Route exact component={Dashboard} path={ROUTES.INFLUENCER_DASHBOARD} />
        <Route
          exact
          component={InfluencerSignup}
          path={ROUTES.INFLUENCER_SIGNUP}
        />
        <Route exact component={Influencer} path={ROUTES.INFLUENCER} />
        <Route
          exact
          component={Application}
          path={ROUTES.INFLUENCER_APPLICATION}
        />

        {/* influencer form */}
        <Route
          exact
          component={ActivityForm}
          path={ROUTES.INFLUENCER_ACTIVITY_FORM}
        />
        <Route
          exact
          component={EventForm}
          path={ROUTES.INFLUENCER_EVENT_FORM}
        />

        {/* Redirect to 404 */}
        <Redirect to={ROUTES.NOT_FOUND} />
      </Switch>
    </>
  );
};

export default AppRouter;
