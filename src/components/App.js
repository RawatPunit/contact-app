import React from 'react';
import './App.css';
import Header from './Header';
import Addcontact from './AddContact';
import ContactList from './ContactList';
function App() {

  // rendering a list of contacts
  const contacts  = [
    {
      id : '1',
      "name": "Punit",
      "email" : "rawatpunit829@gmail.com"
    },
    {
      id : '2',
      "name": "Anjali",
      "email" : "rawatanjali829@gmail.com"
    },
    {
      id : '1',
      "name": "Putin",
      "email" : "rawatputin829@gmail.com"
    }
  ];
  return (
    <div className='ui container'>
      <Header/>
      <Addcontact/>
      {/* passing contacts as props and contacts as array */}
      {/* yaha se direct COntactList ko jayega data for rendering */}
      <ContactList contacts={contacts}/>  
    </div>
  );
}

export default App;
