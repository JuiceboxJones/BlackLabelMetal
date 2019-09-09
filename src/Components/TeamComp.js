import React, { Component } from 'react';
import Team from '../Data/teamData'

class TeamComp extends Component {
  state = {  }

  handleEmployees = () => {
    return Team.map((emp, index) => 
      <li key={index}>
        <div className='empComp'>
          <div className='empName'>
            <h3>{emp.name}</h3>
          </div>
          <div className='empPhoto'>
            <img src={emp.photo} alt='employeePhoto'/>
          </div>
          <div className='empTitle'>
            <p>{emp.title}</p>
          </div>
          <div className='empDesc'>
            <p>{emp.desc}</p>
          </div>
        </div>
      </li>
      )
  }

  render() { 
    return ( 
      <div className='emp-ctr'>
        {this.handleEmployees()}
      </div>
     );
  }
}
 
export default TeamComp;