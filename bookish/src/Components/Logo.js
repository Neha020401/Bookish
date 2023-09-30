import React from 'react'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Logo = () => {
const [search, setSearch] = useState('search for artist and book')

const changeSearch = (event) =>{
   const value = event.target.value
   setSearch(value)
}

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
    placeholder={search}
    onChange={changeSearch} />
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
