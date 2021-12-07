import { Redirect, Route, Switch } from "react-router";
import ScrollToTop from "../../components/common/scroll-to-top/ScrollToTop";
import { ROUTES } from "../../constant/comman.const";
import UserDashboard from "../User/Dashboard/UserDashboard";

const UserRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* user dashboard */}
        <Route component={UserDashboard} path={ROUTES.USER_DASHBOARD} />
        {/* Redirect to 404 */}
        <Redirect to={ROUTES.NOT_FOUND} />
      </Switch>
    </>
  );
};

export default UserRouter;
