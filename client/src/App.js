import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Create from './components/Pages/Create';
import About from './components/Pages/About';
import Edit from './components/Pages/Edit';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/about" component={About} />
      <Route exact path="/edit/:id" component={Edit} />
    </Switch>

    </Router>
    </>
  );
}

export default App;
