import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contex/AuthContex";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import "./styles/style.css";

//
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/result/:id" component={Result} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz/:id" component={Quiz} />
            <PublicRoute exact path="/signup" component={Signup} />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
