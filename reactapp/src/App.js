import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router> {/*Componente para router*/}
      <div className="App">
        <Navbar/> {/*Componente navbar creado antes*/}
        <div className="content">
          <Switch> {/*Componente que envuelve los posibles contenidos*/}

            {/*La ruta de / va la ultima por que hace match*/}
            {/* O usas el exact -> */}
            <Route exact path='/'> 
              <Home/> 
            </Route>

            <Route path='/create'> {/* Si la ruta acccedida es la del path pinta el componente*/}
              <Create/>
            </Route>

            <Route path='/details/:id'> 
              <BlogDetails/>
            </Route>

            <Route path='*'> {/* El * capta cualquier ruta*/}
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
