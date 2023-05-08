import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import SignupPage from './Components/SignupPage';
import Loginpage from './Components/LoginPage';
import HomePage from './Components/HomePage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/"        element={<LandingPage />}/>
        <Route exact path="/signup"  element={<SignupPage />}/>
        <Route exact path="/login"   element={<Loginpage />}/>
        <Route exact path="/home/*"  element={<HomePage />}/>
        <Route path="*"              element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
