import React, { Component } from 'react';
import Mapbox from '../Components/Mapbox';

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='contact-ctr'>
        <div className='gmaps-loc'>
          <Mapbox/>
        </div>
        <div className='address'>

        </div>
        <div className='soc-med'>

        </div>
      </div>
     );
  }
}
 
export default Contact;