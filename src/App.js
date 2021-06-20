import './App.css';

/*Componentes*/
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

/*React Router Dom*/
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route activeClassName="selected" exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/categories/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:title">
              <ItemDetailContainer />
            </Route>
          </Switch>
      </BrowserRouter>
      
      
     
    </div>
  );
}

export default App;
