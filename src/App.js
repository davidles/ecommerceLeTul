import './App.css';

/*Componentes*/
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount/ItemCount'


function App() {

  const onAdd = ( cantidad ) =>{
    console.log(`Cantidad de productos: ${cantidad}`)
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
      <ItemCount stock={8} initial={2} onAdd={onAdd}/>
    </div>
  );
}

export default App;
