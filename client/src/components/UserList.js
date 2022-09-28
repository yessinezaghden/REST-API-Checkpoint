import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/action';
import UserCard from './UserCard';


const UserList = () => {
    const {users, loading}=useSelector(state=>state)
  const dispatch = useDispatch();
console.log(users)
  useEffect(() => {
   dispatch(getUser());
  }, []);
  return (
    <div style = {{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>{
        loading? <h3>loading....</h3>:
        <>
      {users.map(el=><UserCard user={el} />)}
      </>}
    </div>
  )
}

export default UserList
