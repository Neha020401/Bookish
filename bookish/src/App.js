import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/navbar';
import Artist from './Components/Artist';
import Service from './Components/Service';
import Latest from './Components/Latest';
import MyLibrary from './Components/MyLibrary';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cart from './Components/Cart';
import Books from './Components/Books';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/artist' element={<Artist/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/latest' element={<Latest/>}/>
      <Route path='/library' element={<MyLibrary/>}/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/book' element={<Books/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

// React Fundamental  And  React Hooks need to be studied