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
import Signup from './components/signup/Signup';
import Navbar from './components/Navbar';
// import LoginButton from './components/LoginButton';
function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/navbar" component={Navbar} />

          <Route exact path="/" component={Home} />


          <Route exact path="/movies" component={MoviesList} />
          <Route path="/add-movie" component={AddMovie} />
          <Route path="/movies/edit/:id" component={AddMovie} />




          <Route exact path="/customers" component={CustomersList} />
          <Route path="/add-customer" component={AddCustomer} />
          <Route path="/customers/edit/:id" component={AddCustomer} />



          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />



          <Route exact path="/rentals" component={RentalsList} />
          <Route path="/add-rental" component={AddRental} />
          <Route path="/rentals/edit/:id" component={AddRental} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;