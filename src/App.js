import logo from './logo.svg';
import './App.css';
import {LoginScreen, StartScreen, MainScreen} from './screens/index'
import RoutePages from './components/ComponentRouter';
import { isLogged } from './api/Login';

function App() {
  
  return (
    <div className='base'>
        <RoutePages />
    </div>
  );
}

export default App;
