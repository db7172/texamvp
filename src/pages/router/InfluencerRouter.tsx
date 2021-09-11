import { Route, Switch } from "react-router";
import ScrollToTop from "../../components/common/scroll-to-top/ScrollToTop";
import { ROUTES } from "../../constant/comman.const";
import Application from "../influencer/application/Application";
import Dashboard from "../influencer/dashboard";
import ActivityForm from "../influencer/form/activity/ActivityForm";
import EventForm from "../influencer/form/event/EventForm";
import Influencer from "../influencer/home";
import InfluencerSignup from "../influencer/signup/InfluencerSignup";

const InfluencerRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
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
      </Switch>
    </>
  );
};

export default InfluencerRouter;
