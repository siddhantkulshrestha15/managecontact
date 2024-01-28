import React from 'react'
import "./Styles.css"
import DeleteIcon from '@mui/icons-material/Delete';

function ContactList({contact, removeContact}) {
  console.log(contact);
   const contactList = contact.map((val)=>{
    return(
        <div className='output' >
            <div>{val.data.name}</div>
            <div>{val.data.email}</div>
            <span onClick={()=>{removeContact(val.id)}}><DeleteIcon/></span>
        </div>
    )
   })
  return (
<>
<div className='clstyle' > <h1>Contact List</h1></div>
<div className='listitem'>{contactList}</div>
</>
  )
}

export default ContactList
