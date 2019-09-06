import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Facebook extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='fb-ctr'>
        <h2>SOCIAL MEDIA</h2> 
        <h4>#HOLYHASHTAG</h4>
        <p>Help us build our tags!
          <br/> 
          If you had an awesome experience with us dont be shy to tag it up!
          <br/>
          #theblacklabelmetal #blacklabelmetal @blacklabelmetal
        </p>
        <Iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fblacklabelmetal&tabs=timeline&width=400px&height=500px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="400px" 
        height="500px" 
        styles={{border:"none", overflow:"hidden"}} 
        scrolling="no" 
        frameborder="0" 
        allowTransparency="true" 
        allow="encrypted-media"/>
      </div>
     );
  }
}
 
export default Facebook;