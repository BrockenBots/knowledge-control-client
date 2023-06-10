import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen, TestScreen, StartScreen, MainScreen } from '../../screens'
import { isLogged } from '../../api/Login';

const RoutePages = () => {
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={isLogged() ? <MainScreen/> : <StartScreen/>} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="test/:test_id" element={<TestScreen />} />
    </Routes>
    
  </Router>
  )
}
  
  export default RoutePages;