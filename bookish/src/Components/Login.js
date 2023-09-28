import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const goBack = () => {
    window.history.back(); // This takes the user back to the previous page
  };
  return (
    <div className=' loginPg'>
      <form className='loginform'>
        <div>
        <input type='mail' placeholder='Enter your Mail Id or Number'></input>
        <input type='password' placeholder='Enter the Password'></input>
        <button>Login</button>
        </div>
        <div>
            <button><Link to='/signup'>SignUp</Link></button>
        </div>
      </form>
      <div> <FontAwesomeIcon icon={faXmark} rotation={180} size='xl' style={{ color: '#fb0429' }}  className='crossbtn' onClick={goBack}/>
      </div>
    </div>
  )
}

export default Login

