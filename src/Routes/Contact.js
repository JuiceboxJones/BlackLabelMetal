import React, { Component } from 'react';
import Mapbox from '../Components/Mapbox';
import Facebook from '../Components/Facebook';

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='contact-ctr'>
        <div className='maps-ctr'>
          <div className='map-subctr'>
            <h2>The Shop</h2>
            <Mapbox/>
            <h3>Address</h3>
            <p>BLACK LABEL METAL 
              <br/>
              5070 NE 59th Ave #112
              <br/>
              Hillsboro, Oregon 97124
              <p/>
              1-503-530-8883 
              <br/>
              Info@Blacklabelmetal.com</p>
          </div>
        </div>
        <div className='soc-med'>
          <Facebook/>

        </div>
      </div>
     );
  }
}
 
export default Contact;