import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;