import React, { Component } from 'react';
import './Services.css'

class Services extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='serv-ctr'>
        <div className='serv-over'>
          <h1>Services Overview</h1>
          <p>
            Whether you have a new idea, a one off, or need to expand your production; 
            Our team at BlackLabelMetal is ready to take care of your needs. 
            For information on pricing give us a call, send us an email, or stop in today. 
            <br/>
            When you've been in business as long as we have and faced technology's increasingly rapid developments, 
            you learn a few things. Or, in our case, more than a few. We not only have simple, 
            ready-to-implement solutions for almost every problem, we have the patents for them, too. 
            And, if you bring us something new, our engineers would love to work with you to find the solution.
          </p>
        </div>
        <div className='serv-off'>
          <h1>What we offer</h1>
          <ul>
            <li>
              <h3>Design</h3>
              <p>
                With the latest version of Solidworks in house, 
                we have the ability to work with many 2 and 3 dimensional file types. 
                Our drafting department makes use of parametric properties making for 
                quick and easy adjustments to prototypes and change orders.
              </p>
            </li>
            <li>
              <h3>Welding</h3>
              <p>
                Our shop is fully equipped and set up to weld almost any variation of stainless, 
                aluminum, and steel. Our master welders can produce multiple styles and variations 
                of beads to best fit the clients desired outcome.
              </p>
            </li>
            <li>
              <h3>Forming</h3>
              <p>
                A powerful 80 ton Amada 8 Axis cnc pressbrake stands at the heart of our shop ready 
                to make precise bends on our clients formed products. With a wide variety of tooling 
                and our skilled operator, Black Label Metal is your go to for formed parts
              </p>
            </li>
            <li>
              <h3>Powder Coating</h3>
              <p>
              Every final product needs a finish, whether its clear coated steel for an industrial look, 
              neutral display colors to emphasize a product, or bright bold attention grabbers, 
              we offer state of the art powder coating ready to meet our clients needs​
              </p>
            </li>
          </ul>
          <ul className='serv-list'>
            <h1>Services List</h1>
            <li>Steel Welding</li>
            <li>Stainless Steel Welding</li>
            <li>Aluminum Welding</li>
            <li>3D Design</li>
            <li>2D Flat Pattern Generating</li>
            <li>Complex Forming</li>
            <li>Prototyping</li>
            <li>High Volume Production</li>
            <li>Powder Coating</li>
            <li>Assembly & Packaging</li>
          </ul>
        </div>
      </div>
     );
  }
}
 
export default Services;