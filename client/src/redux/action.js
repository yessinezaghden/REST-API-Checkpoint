import { DELETE_USER, EDIT_USER, GET_USERS, POST_USERS } from "./actionTypes"
import axios from "axios"


export const getUser =()=>async(dispatch)=>{
    
    try {
        const res = await axios.get('/get')
        console.log(res)
        dispatch ({
            type : GET_USERS,
            payload:res.data,
        })
    } catch (error) {
        console.log('get error')
    }
};
export const postuser =(newUser)=>async(dispatch)=>{
    
    try {
        const {data} = await axios.post('/add',newUser)
        console.log(data)
        dispatch ({
            type : POST_USERS,
            payload:data,
        })
    } catch (error) {
        console.log('post error')
    }
}
export const deleteuser =(id)=>async(dispatch)=>{
    
    try {
        const res = await axios.delete(`/delete/${id}`)
        console.log(res)
        dispatch ({
            type : DELETE_USER,
            payload:id
            
        })
    } catch (error) {
        console.log('del error')
    }
};
export const edituser =(editedUser)=>async(dispatch)=>{
    
    try {
        const res = await axios.put(`/put/${editedUser.id}`)
        console.log(res)
        dispatch ({
            type : EDIT_USER,
            payload:res.data
            
        })
    } catch (error) {
        console.log('del error')
    }
};