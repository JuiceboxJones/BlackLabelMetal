import React, { Component } from 'react';
import Mapbox from '../Components/Mapbox';
import Facebook from '../Components/Facebook';
import './Contact.css';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-ctr">
        <div className="maps-ctr">
          <div className="map-subctr">
            <h2>THE SHOP</h2>
            <Mapbox />
            <h3>Address</h3>
            <p>
              BLACK LABEL METAL
              <br />
              <a href="https://maps.google.com/?q=5070+NE+59th+Ave+Ste+112,+Hillsboro,+OR+97124">
                  5070 NE 59th Ave #112
                  <br />
                  Hillsboro, Oregon 97124
              </a>
            </p>
            <p>
              Phone: <a href="tel:1-503-530-8883">503-530-8883</a>
              <br />
              Email:{' '}
              <a href="mailto:kevin@Blacklabelmetal.com">
                Info@Blacklabelmetal.com
              </a>
            </p>
          </div>
        </div>
        <div className="soc-med">
          <Facebook />
        </div>
      </div>
    );
  }
}

export default Contact;
