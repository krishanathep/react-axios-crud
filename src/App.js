import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Photos from './components/Photos';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/photos">
          <Photos/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
