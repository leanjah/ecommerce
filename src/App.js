import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
