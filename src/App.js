import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import ProductDetail from './pages/detail';
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path ='/:productId' component={ProductDetail} />
      </Switch>
    </>
  );
}

export default App;
