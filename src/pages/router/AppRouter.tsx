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

        {/* Redirect to 404 */}
        <Redirect to={ROUTES.NOT_FOUND} />
      </Switch>
    </>
  );
};

export default AppRouter;
