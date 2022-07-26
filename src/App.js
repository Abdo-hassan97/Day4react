import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Movies from './Movies/Movies';
import Fav from './Fav/Fav';
import Login from './Login/Login';
import Rigester from './Rigester/Rigester';
import NavBar from './NavBar/NavBar';
import MoviesDetails from './MoviesDetails/MoviesDetails';
// import { useSelector } from 'react-redux';


function App() {

  return (
    <>
      

    <Router>
    <NavBar />
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/Fav" exact component={Fav} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Rigester" exact component={Rigester} />
        <Route path="/details/:id" component={MoviesDetails}/>

      </Switch>
    </Router>
  </>
  )

}

export default App;
