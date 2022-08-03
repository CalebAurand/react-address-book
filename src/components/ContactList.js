import React, {useState} from 'react';

const ContactList = (props) => {
  const [hidden, setHidden] = useState(true);
  const {first, last, picture, phone, city, country} = props;
  console.log("contact", props)

  return (
    <>
      <h3>{first}</h3>
      <h4>{last}</h4>
      <img src={picture} alt="headshot" />
      {
        hidden ? <button onClick={()=>setHidden(!hidden)} >Show Details</button> : (
          <>
            <p>Phone Number: {phone}</p>
            <p>City Located: {city}</p>
            <p>Country: {country}</p>
            <button onClick={()=>setHidden(!hidden)}>Hide Details</button>
          </>
        )
      }
    </>
)}

export default ContactList;