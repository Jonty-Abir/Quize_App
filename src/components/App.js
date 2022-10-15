import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contex/AuthContex";
import CreateQuize from "./CREAT_QUIZE/CreateQuize";
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
    <Suspense fallback="Loading...">
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/result/:id" component={Result} />
              <PublicRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/quiz/:id" component={Quiz} />
              <PublicRoute exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/custom" component={CreateQuize}/>

              <Route component={NotFound} />
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </Suspense>
  );
}

export default App;
