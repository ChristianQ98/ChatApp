import Chat from './pages/Chat';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        { window.sessionStorage.getItem('name') ?
          <Route exact path="/chat">
          <Chat/>
          </Route> :
          <Redirect to="/"/>
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
