import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';


//portfolio will display all photos, when photo is clicked, it will be displayed as a modal
//all nav buttons will render the content in the empty space, replacing the welcome content
//black label banner should navigate to home
//contact will have location details (google map???) as well as email, phone, and social links 


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
