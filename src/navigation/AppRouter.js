import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Crops from "../pages/crops/Crops";
import Notifications from "../pages/notifications/Notifications";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/myCrops" component={Crops}/>
        <Route path="/notifications" component={Notifications}/>
      </Switch>
    </Router>
  );
}

export default AppRouter; 
