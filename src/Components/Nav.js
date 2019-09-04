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
      <Link to='/services'>
      <button type='button' id='nav-btn' className='btn-sv'>Services</button>
      </Link>
      <button type='button' id='nav-btn' className='btn-pr' onClick={'do something'}>Portfolio</button>
      <button type='button' id='nav-btn' className='btn-ab' onClick={'do something'}>About Us</button>
      <button type='button' id='nav-btn' className='btn-tm' onClick={'do something'}>Team</button>
      <button type='button' id='nav-btn' className='btn-ct' onClick={'send to contacts'}>Contact</button>
      </section>
     );
  }
}
 
export default Nav;