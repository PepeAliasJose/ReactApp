import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar/> {/*Componente navbar creado antes*/}
      <div className="content">
        <Home/> {/*Componente home*/}
      </div>
    </div>
  );
}

export default App;
