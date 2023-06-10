import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen, StartScreen, MainScreen } from '../../screens'

const RoutePages = () => (

  // const isLogged = () => {
  //   if (localStorage.getItem('user') !== '') {
  //     return true
  //   }
  // }
  
  <Router>
    <Routes>
      <Route path="/" element={<StartScreen/>} />
      {/* <Route path="login" element={<LoginScreen />} /> */}
    </Routes>
    
  </Router>
  );
  
  export default RoutePages;