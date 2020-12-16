import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import {Provider} from 'react-redux'
import store from './store'
import {Container} from 'reactstrap'
import CarsView from './components/CarsView'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <Container>
        <CarsView/>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
