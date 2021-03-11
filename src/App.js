//import logo from './logo.svg';
import './App.css';

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Font Awesome Library for individual component use
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


//Component Import
import Home from './component/Home/Home';
import LeagueDetail from './component/LeagueDetail/LeagueDetail';


//Passing fonts using Library
library.add(fab,fas)


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route  path="/home">
        <Home></Home>
      </Route>
      <Route path="/league/:leagueId">
        <LeagueDetail></LeagueDetail>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
