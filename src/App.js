import logo from './logo.svg';
import './App.css';
import {LoginScreen, StartScreen, MainScreen} from './screens/index'
import RoutePages from './components/ComponentRouter';


function App() {
  return (
    <div className="App">
      <div className='main'>
        {/* <RoutePages /> */}
        {/* <LoginScreen /> */}
        {/* <StartScreen /> */}
        <MainScreen/>
      </div>
    </div>
  );
}

export default App;
