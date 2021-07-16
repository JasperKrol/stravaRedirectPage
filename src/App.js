import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import './App.css';
import StravaRedirect from "../src/pages/StravaRedirect";
import YourDistance from "../src/pages/YourDistance";
import Home from "../src/pages/Home"

function App() {
  return (
      <>
      <div className="main">
          <ul>
              <Link to="/">
              <li>home</li>
              </Link>
              <Link to="redirect"><li>redirect</li></Link>
              <Link to="yourdistance"><li>yourdistance</li></Link>

          </ul>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/redirect" component={StravaRedirect} />
          <Route path="/yourdistance" component={YourDistance} />
        </Switch>
      </div>
      </>
  )
}

export default App;
