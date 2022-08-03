import './App.css';
import React, {useState} from 'react';
import ContactList from './components/ContactList';

function App() {
  const [contacts, updateContacts] = useState([]);

  fetch('https://randomuser.me/api?results=25')
    .then((response)=> response.json())
    .then((data)=> {
      if(!contacts.length){
        updateContacts(data.results)
      }
    })

    console.log("contacts", contacts);
    

  return (
    <div>
      {
        contacts.map((contact, index)=>(
          <ContactList key={index} first={contact.name.first} last={contact.name.last} picture={contact.picture.medium} phone={contact.phone} city={contact.location.city} country={contact.location.country}/>
        ))
      }
    </div>
  );
}

export default App;
