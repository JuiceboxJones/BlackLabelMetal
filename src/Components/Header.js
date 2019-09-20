import React, {Component} from 'react';
import banner from '../Assets/banner.jpg'
import './Header.css'


class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className='hdr-img-ctr'>
          <img className='blk-banner' src={banner} alt='BL-Banner' />
        </div>
      </>
     );
  }
}
 
export default Header;

