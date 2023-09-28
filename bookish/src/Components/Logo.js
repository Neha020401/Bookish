import React from 'react'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'


const Logo = () => {
return (
<div>
<div className='logoContainer'><div>
    <img src="/assets/simpleLogo.png"
    alt="can't display"
    className='logoImg' />
</div>
<div className='searchBtnContainer'>
    <input type="search"
    name="searchInput"
    id="search"
    placeholder=' Search for the Artists Or Books ' />
</div>
<div className='signBtnContainer'>
    <button className='loginBtn btn'>
        <Link to='/login'> Login </Link>
        </button></div>
        <div>
    <Link to='/cart'>
    <button className="cart-button btn"  >
    <FontAwesomeIcon icon={faCartShopping}  size='xl'/>
    </button></Link></div>
</div>
</div>
)
}

export default Logo
