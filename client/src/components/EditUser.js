import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { edituser, getUser } from '../redux/action';
import UserCard from './UserCard';
const EditUser = ({user}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        const [fullName, setFullName] = useState(user.fullName);
        const [phone, setPhone] = useState(user.phone);
        const [email, setEmail] = useState(user.email);
        const dispatch = useDispatch()
        const handleSubmit = (e)=>{
            e.preventDefault();
            const editedUser = {
                id:user._id,
                fullName,
                email,
                phone
            }
            dispatch(edituser(editedUser))
            dispatch(getUser())
            handleClose()
        }
  return (
    <div>
    
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form >
        <label>name</label>
        <input type="text" value = {fullName} onChange={(e)=>setFullName(e.target.value)}/>
        <label>email</label>
        <input type="text" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>phone</label>
        <input type="text" value = {phone} onChange={(e)=>setPhone(e.target.value)}/>
      </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ;

    </div>
  )
}

export default EditUser
