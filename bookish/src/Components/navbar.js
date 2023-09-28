import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import Logo from './Logo';

const Navbar = () => {
  // const [menu, setMenu] = useState(false)
  // const displayMenu =()=>{
  //   setMenu(!menu)
  // }
  return (
    <div>
      <Logo />
      {/* <div onClick={displayMenu}>
        <i>
          <FontAwesomeIcon icon={faBars} /> 
        </i>
      </div> */}

      <div className='navlinkContainer'>
        <ul className='linkContainers'>
          <li className='navLinks'><Link to='/'>Home</Link></li>
          <li className='navLinks'><Link to='/library'>MyLibrary</Link></li>
          <li className='navLinks'><Link to='/artist'>Artist</Link></li>
          <li className='navLinks'><Link to='/about'>About</Link></li>
          <li className='navLinks'><Link to='/latest'>Latest</Link></li>
          <li className='navLinks'><Link to='/service'>Service</Link></li>
          <li className='navLinks'><Link to='/book'>Books</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
