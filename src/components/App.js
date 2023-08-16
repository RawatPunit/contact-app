import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts"; // store the contacts in th local storage key
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  ); //initially the contacts will be an empty array
  //-------------removed as using REACT HOOKS for dynamic data-------------
  // rendering a list of contacts
  // const contacts  = [
  //   {
  //     id : '1',
  //     "name": "Punit",
  //     "email" : "rawatpunit829@gmail.com"
  //   },
  //   {
  //     id : '2',
  //     "name": "Anjali",
  //     "email" : "rawatanjali829@gmail.com"
  //   },
  //   {
  //     id : '1',
  //     "name": "Putin",
  //     "email" : "rawatputin829@gmail.com"
  //   }
  // ];
  //------------not req. as we are using useState for dynamic data filling and deletion------------------

  //gettign the CONTACT from the AddContact component
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]); //get all the data from the ...contact and put it into a new contact
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //while reloading the data gets wipe, so to update the token using useEff
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // now get the item from the updated LOCAL_STPRAGE_Key or the updated TOKEN
  // useEffect(()=>{
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   //only retirve new token when a new token is available
  //   if(retriveContacts){
  //     setContacts(retriveContacts);
  //   }
  // },[contacts])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      {/* to pass the data from the child to the parent that is from the contact and email array to the parent app ----------adding "addcontactHandler function" */}
      <AddContact addContactHandler={addContactHandler} />
      {/* passing contacts as props and contacts as array */}
      {/* yaha se direct COntactList ko jayega data for rendering */}
      <ContactList contacts={contacts} getContactID={removeContactHandler} />
    </div>
  );
}

export default App;
