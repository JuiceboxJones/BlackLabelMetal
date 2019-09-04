import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import { Route, Switch } from 'react-router-dom'
import Main from './Components/Main';
import Services from './Routes/Services';
import Story from './Routes/Story';
import Team from './Routes/Team';
import Contact from './Routes/Contact';


//portfolio will display all photos, when photo is clicked, it will be displayed as a modal
//all nav buttons will render the content in the empty space, replacing the welcome content
//black label banner should navigate to home
//contact will have location details (google map???) as well as email, phone, and social links 


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/services' component={Services}/>
        <Route path='/portfolio' component={'Portfolio'}/>
        <Route path='/about' component={Story}/>
        <Route path='/team' component={Team}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
