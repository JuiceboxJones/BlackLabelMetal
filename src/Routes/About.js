import React, { Component } from 'react';
import { createRequireFromPath } from 'module';

class About extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='about-ctr'>
        <div className='about-center'>
          <h1 className='welcome-hdr'>Welcome</h1>
          <p>
            There are a lot of ways to describe what we do but the truth is, 
            we simply specialize in getting the job done.  For us, that means delivering, 
            every time, high quality products on time and on budget. Without variation. 
            And without excuses. If we can’t do it or can’t do it the right way, 
            you’ll know before we ever take the job because pride in our work and 
            your success is more important than winning another job ticket. 
            <p/>
            Our skills run deep so we can take your project from concept to completion, 
            reducing the burden on you to manage the complex workflow of a fabrication project. 
            Located at the center of Hillsboro’s technology community, we serve the needs of Pacific Northwest high tech, 
            creative agencies, and retail industry with world-class fabrication and finishing. 
            <p/>
            Customers come to us from a wide selection of industries and range in size from 
            international leaders looking to stay on top to smaller local customers looking to 
            complete a project that is no less ambitious. We show them the same level of respect 
            and attention because in the end we are pursuing the same thing; ambition and excellence of craft in the guise of metal. 
            <p/>
            <img id='abt-cs' src={require('../Assets/Kevin&Kathy.jpg')} alt='cool shit'/>
            <p/>
            Welcome to BlackLabelMetal.    Cool shit gets made here.
            </p>
          </div>
      </div>
     );
  }
}
 
export default About;