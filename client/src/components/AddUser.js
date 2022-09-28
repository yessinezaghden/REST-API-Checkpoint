import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postuser } from '../redux/action';

const AddUser = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUser = {
            fullName,
            email,
            phone
        }
        dispatch(postuser(newUser))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" value = {fullName} onChange={(e)=>setFullName(e.target.value)}/>
        <label>email</label>
        <input type="text" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>phone</label>
        <input type="text" value = {phone} onChange={(e)=>setPhone(e.target.value)}/>
        <button type='confirm'>Edit</button>
      </form>
    </div>
  )
}

export default AddUser
