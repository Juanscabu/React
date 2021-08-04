import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Navegacion from './components/Navegacion';
import Cascada from './components/Cascada';
import Lago from './components/Lago';
import Luna from './components/Luna';
import Otoño from './components/Otoño';
import Playa from './components/Playa';


function App() {
  return (
   <Router>
      <Route path="/Cascada" component={Cascada}/>
      <Route path="/Lago" component={Lago}/>
      <Route path="/Luna" component={Luna}/>
      <Route path="/Otoño" component={Otoño}/>
      <Route path="/Playa" component={Playa}/>

      <Navegacion></Navegacion>
   </Router>
  );
}

export default App;
