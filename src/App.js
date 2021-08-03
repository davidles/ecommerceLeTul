import './App.css';
/*Context*/
import {CartContextProvider} from './Context/CartContext';

/*Componentes*/
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'

/*React Router Dom*/
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {


  return (
    <div className="App">  
      <CartContextProvider>

      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route activeClassName="selected" exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/categories/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/productos">
              <ItemDetailContainer />
            </Route>
          </Switch>
      </BrowserRouter>

      </CartContextProvider>
      
      
     
    </div>
  );
}

export default App;
