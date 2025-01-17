
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registration from './Pages/Registration'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element = {<Login />}/>
            <Route path = "/home" element = {<Home />}/>
            <Route path = "/login" element = {<Login />}/>
            <Route path = "/registration" element = {<Registration />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;