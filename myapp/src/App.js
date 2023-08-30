import SignupPage from './SignupPage';
// import './App.css';
import LoginPage from './LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignupPage />}/>
        <Route path="/loginpage" element={<LoginPage />}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App;
