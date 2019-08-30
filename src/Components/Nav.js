import React, { Component } from 'react';

class Nav extends Component {
  state = {  }
  render() { 
    return ( 
      <section className='sidebar'>
      <button type='button' className='btn-sv' onClick={'do something'}>Services</button>
      <button type='button' className='btn-pr' onClick={'do something'}>Portfolio</button>
      <button type='button' className='btn-ab' onClick={'do something'}>About Us</button>
      <button type='button' className='btn-tm' onClick={'do something'}>Team</button>
      <button type='button' className='btn-ct' onClick={'send to contacts'}>Contact</button>
      </section>
     );
  }
}
 
export default Nav;