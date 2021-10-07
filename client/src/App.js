import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Nav = () => {
  return (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <Link className="nav-link" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
    </li>
  </ul>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
