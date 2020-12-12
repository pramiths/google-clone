import './App.scss';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Apps } from '@material-ui/icons/Apps';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/search">
          <h1>Search page</h1>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
