import { Route, Switch } from "react-router";
import ScrollToTop from "../../components/common/scroll-to-top/ScrollToTop";
import { ROUTES } from "../../constant/comman.const";
import Application from "../influencer/application/Application";
import Dashboard from "../influencer/dashboard";
import ActivityForm from "../influencer/form/activity/ActivityForm";
import EventForm from "../influencer/form/event/EventForm";
import RetreatForm from "../influencer/form/retreat/RetreatForm";
import Influencer from "../influencer/home";
import PasswordReset from "../influencer/password-reset/PasswordReset";
import InfluencerProfile from "../influencer/profile";
import InfluencerProfileSetting from "../influencer/profile-setting";
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
          component={InfluencerProfile}
          path={ROUTES.INFLUENCER_PROFILE}
        />
        <Route
          exact
          component={InfluencerProfileSetting}
          path={ROUTES.INFLUENCER_PROFILE_SETTING}
        />
        <Route
          exact
          component={InfluencerSignup}
          path={ROUTES.INFLUENCER_SIGNUP}
        />
        <Route
          exact
          component={PasswordReset}
          path={ROUTES.INFLUENCER_PASSWARD_RESET}
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
        <Route
          exact
          component={RetreatForm}
          path={ROUTES.INFLUENCER_RETREAT_FORM}
        />
      </Switch>
    </>
  );
};

export default InfluencerRouter;
