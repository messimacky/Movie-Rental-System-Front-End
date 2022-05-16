import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import MoviesList from "./components/MoviesList";
import NotFound from "./components/NotFound";
import Login from './components/login/Login';
import AddCustomer from './components/AddCustomer'
import CustomersList from './components/CustomerList';
import RentalsList from './components/RentalsList';
import AddRental from './components/AddRental';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={MoviesList} />
          <Route path="/add-movie" component={AddMovie} />
          <Route path="/movies/edit/:id" component={AddMovie} />




          <Route exact path="/customers" component={CustomersList} />
          <Route path="/add-customer" component={AddCustomer} />



          <Route path="/login" component={Login} />




          <Route path="/add-rental" component={AddRental} />
          <Route path="/rentals" component={RentalsList} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;