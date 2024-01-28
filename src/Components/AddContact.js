import React, { useState } from 'react'
import './Styles.css'

function AddContact({addContact}) {
    const[contactdata, setContactdata] = useState({name:"", email:""});
    
    const handleChange = (e) =>{
        if(e.target.name==="name"){
            setContactdata({...contactdata, name: e.target.value})
        }
        else{
            setContactdata({...contactdata, email: e.target.value})
        }
    }
    const handleAdd = () =>{
        if(contactdata.name==="" ||contactdata.email===""){
            alert("Please fill all the fields");
        }
        else{
            console.log(contactdata);
            addContact(contactdata);
            setContactdata({name:"", email:""})
        }
    }

  return (
    <>
    <div>
      <h1 className='clstyle' >Add Contact</h1>
<form action="">
    <label htmlFor="">Name :</label><br />
    <input type="text" name='name' value={contactdata.name} onChange={handleChange} placeholder='Enter Your Name' /> <br /><br />

    <label htmlFor="">Email :</label><br />
    <input type="email" name='email' value={contactdata.email} onChange={handleChange} placeholder='Enter Your Email' /><br />

</form>
<button onClick={handleAdd} >Add Contact</button>
    </div>
    </>
  )
}

export default AddContact
