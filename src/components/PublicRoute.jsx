import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./contex/AuthContex";

export default function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return !currentUser ? (
    <Route {...rest}>
      {(ourProps) => <Component name="abir thanks" {...ourProps} />}
    </Route>
  ) : (
    <Redirect to="/" />
  );
}
