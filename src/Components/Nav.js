import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {  }
  render() { 

    return ( 
      <section className='sidebar'>
      <Link to='/'>
      <button type='button' id='nav-btn' className='btn-sv'>Home</button>
      </Link>

      <Link to='/about'>
      <button type='button' id='nav-btn' className='btn-ab'>About Us</button>
      </Link>
      
      <Link to='/team'>
      <button type='button' id='nav-btn' className='btn-tm'>Team</button>
      </Link>

      <Link to='/services'>
      <button type='button' id='nav-btn' className='btn-sv'>Services</button>
      </Link>

      <button type='button' id='nav-btn' className='btn-pr'>Portfolio</button>

      <Link to='/contact'>
      <button type='button' id='nav-btn' className='btn-ct'>Contact</button>
      </Link>
      
      </section>
      
     );
  }
}
 
export default Nav;