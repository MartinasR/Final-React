import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Add from './pages/add'

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
