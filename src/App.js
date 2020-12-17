import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AboutUs from './component/pages/AboutUs';
import ContactUs from './component/pages/ContactUs';
import Homepage from "./component/pages/HomePage";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./component/pages/NotFound";
import Volleyball from "./component/pages/VolleyBall";
import Volleyballregistration from "./component/pages/VolleyBallRegistration";
import Badmintion from "./component/pages/Badmintion";
import Badmintionregistration from "./component/pages/BadmintionRegistration";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/sports/VolleyBall" component={Volleyball} />
          <Route exact path="/sports/VolleyBall/Registration" component={Volleyballregistration} />
          <Route exact path="/sports/Badmintion" component={Badmintion} />
          <Route exact path="/sports/Badmintion/Registration" component={Badmintionregistration} />
          <Route component={NotFound} />

        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
