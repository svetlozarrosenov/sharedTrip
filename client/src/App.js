import './css/Settings.css';
import './css/Base.css';
import './css/Reset.css';
import './css/Shell.css';

import  Home from './pages/Home.js';
import About from './pages/About.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
