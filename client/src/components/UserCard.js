import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteuser, getUser } from '../redux/action';
import EditUser from './EditUser';

const UserCard = ({user}) => {
const dispatch =  useDispatch();
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.fullName}</Card.Title>
        <Card.Text>
         {user.email}
        </Card.Text>
        <Card.Text>
         {user.phone}
        </Card.Text>
        <EditUser user ={user}/>
        <Button variant="danger" onClick={()=>{dispatch(deleteuser(user._id));dispatch(getUser())}}>delete</Button>
      </Card.Body>
    </Card>  
    </div>
  )
}

export default UserCard
