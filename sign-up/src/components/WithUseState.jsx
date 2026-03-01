
import React from 'react'
import { useState } from 'react'
import "./UseState.css"

const WithUseState = () => {
const[form,setForm] =useState({
  name: "",
  email: "",
  phone: ""
,}) 

function handleChange(e){
  const{name,value} = e.target
  e.preventDefault();

  setForm((prevData)=>(
    {
      ...prevData,
      [name]:value
    }
  )
    
  )
}

function handleSubmit(){
  localStorage.setItem("formData", JSON.stringify(form));
    alert("Data Saved!");
}

  return (
    <>

    
    
    <form >
      <input type="text" name="name" id=""  placeholder='Enter your name' onChange={handleChange} value={form.name} />
      <input type="text" name="email" id="" placeholder='enter your valid email' onChange={handleChange} value={form.email} />
      <input type="text" name="phone" id="Enter your valid mobile number" onChange={handleChange} value={form.phone} />
      <button type='button' onClick={handleSubmit}  >SUBMIT</button>
    </form>

   

    </>
  )
}

export default WithUseState