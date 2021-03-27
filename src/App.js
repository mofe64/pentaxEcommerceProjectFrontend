import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </>
  );
}

export default App;
