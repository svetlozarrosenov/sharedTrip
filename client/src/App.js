import './css/Settings.css';
import './css/Base.css';
import './css/Reset.css';
import './css/Shell.css';

import  Home from './pages/Home';
import About from './pages/About';
import Trips from './pages/Trips';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/trips" exact component={Trips} />
            <Route path="/register" exact component={Register} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
