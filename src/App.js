import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './componenets/Navbar';
import Login from './componenets/Login';
import About from './componenets/About';
import Contact from './componenets/Contact';
import Home from './componenets/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/navbar' element={<Navbar/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
