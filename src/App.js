import './App.css';

/*Componentes*/
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './Components/ItemDetail/ItemDetail'


function App() {


  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
