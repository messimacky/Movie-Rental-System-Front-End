import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import MoviesList from "./components/MoviesList";
import NotFound from "./components/NotFound";
import Login from './components/login/Login';
import AddCustomer from './components/AddCustomer'
import CustomerRegistration from './components/customerRegistration/CustomerRegistration';

//import { Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route exact path="/customers" component={MoviesList} />
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