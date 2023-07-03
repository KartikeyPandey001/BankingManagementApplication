import { Redirect, Route, useNavigate } from "react-router-dom";
import UserLogin from "./userLogin";
import useAuthHelper from "./useAuthHelper";

function ProtectedRoute(props) {
  var { isLoggedIn } = useAuthHelper();

  var isUserLoggedIn = isLoggedIn();
  // debugger;
  if (isUserLoggedIn) {
    return <Route exact path={props.path} component={props.component} />;
  } else {
    return <UserLogin signin={props.signin}></UserLogin>;
  }
}

export default ProtectedRoute;
