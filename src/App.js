import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import ProductDetail from './pages/detail';
import Cart from './pages/cart';
import CheckOut from './pages/checkout';
import RegisterPage from './pages/register';
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={CheckOut} />
        <Route exact path = '/register' component={RegisterPage}/>
        <Route exact path ='/:productId' component={ProductDetail} />

      </Switch>
    </>
  );
}

export default App;
