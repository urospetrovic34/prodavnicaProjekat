import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import {Provider} from 'react-redux'
import store from './store'
import {Container} from 'reactstrap'
import CarsView from './components/CarsView'
import SingleCarPage from './components/SingleCarPage'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
            <AppNavbar/>
        <Switch>
          <Route path="/" exact component={CarsView}/>
          <Route path="/:id" component={SingleCarPage}/>
        </Switch>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
