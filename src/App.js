import './App.css';
import Header from './Components/Header';
import World from './Components/World';
import India from './Components/India';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
    <Route exact path='/' >
    <India/>
    </Route>
    <Route  path='/india' >
    <India/>
    </Route>
    <World/>
    
    <Route  path='/world' >
    <World/>
    </Route>
    
    </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
