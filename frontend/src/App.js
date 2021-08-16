import logo from './logo.svg';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './view/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => (<Login {...props} />)} />
        
      </Switch>
    </Router>
  );
}

export default App;
