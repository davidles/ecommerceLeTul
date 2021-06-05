import './App.css';
/*Componentes*/
import NavBar from './Components/NavBar/NavBar'
import CarouselSlides from './Components/Carousel/CarouselSlides'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

/*Views*/
import Cards from './Views/Cards/Cards'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <CarouselSlides />
      <ItemListContainer />
      <Cards />
    </div>
  );
}

export default App;
