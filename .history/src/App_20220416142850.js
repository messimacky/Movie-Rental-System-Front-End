import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import MoviesList from "./components/MoviesList";
import NotFound from "./components/NotFound";
import Login from './components/login/Login';
import AddCustomer from './components/AddCustomer'
import CustomersList from './components/CustomerList';
// import CustomerRegistration from './components/customerRegistration/CustomerRegistration';
import Home from './components/Home';

//import { Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={MoviesList} />
          <Route exact path="/customers" component={CustomersList} />
          <Route path="/login" component={Login} />
          <Route path="/add-movie" component={AddMovie} />
          <Route path="/add-customer" component={AddCustomer} />

          <Route path="/movies/edit/:id" component={AddMovie} />
          <Route path="/sign-up" component={CustomerRegistration} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;