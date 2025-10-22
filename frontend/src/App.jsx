import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
        <nav style={{background:"black",justifyContent:"center", borderRadius:"5px",fontSize:"30px", display:"flex",gap:"20px", marginTop:"20px",fontWeight:"bold", marginLeft:"20px",marginRight:"20px",alignContent:"center", padding:"10px"}}>
        <Link to="/" style={{color:"Silver", textDecoration:"none"}}>Home</Link>
        <Link to="/about" style={{color:"Silver", textDecoration:"none"}}>About</Link>
        <Link to="/contact" style={{color:"Silver", textDecoration:"none"}}>Contact</Link>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
