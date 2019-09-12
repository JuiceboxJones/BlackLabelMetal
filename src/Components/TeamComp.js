import React, { Component } from 'react';
import Team from '../Data/teamData'

const employee = (emp) =>
<>
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
</>

class TeamComp extends Component {

  handleOwners = () => {
    return Team.map((emp, index) => {
      if(emp.id === 1){
        return(
        <div className='tm-owner'>
        <li key={index}>
          {employee(emp)}
        </li>
        </div>
        )
      }
    })
  }

  handleManagers = () => {
    return Team.map((emp, index) => {
      if(emp.id === 2){
        return(
          <div className='tm-manager'>
          <li key={index}>
            {employee(emp)}
          </li>
          </div>
        )
      }
    })
  }

  handleEmployees = () => {
    return Team.map((emp, index) => {
      if(emp.id === 3){
        return(
          <div className='tm-employee'>
          <li key={index}>
            {employee(emp)}
          </li>
          </div>
        )
      }
    })
  }


  render() { 
    return ( 
      <div className='emp-ctr'>
        <div className='emp-owner'>
          {this.handleOwners()}
        </div>
        <div className='emp-mgr'>
          {this.handleManagers()}
        </div>
        <div className='emp-emp'>
          {this.handleEmployees()}
        </div>
      </div>
     );
  }
}
 
export default TeamComp;