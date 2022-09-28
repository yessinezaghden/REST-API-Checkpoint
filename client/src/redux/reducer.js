const { GET_USERS, POST_USERS, DELETE_USER, EDIT_USER } = require("./actionTypes");


const init = {
    loading : true,
    users:null

}
const reducer = (state=init , {type,payload})=>{
    switch (type) {
        case GET_USERS:
            return{
                ...state,loading:false,users:payload,
            }
        case POST_USERS:
            return{
                ...state,users:[...state.users,payload]
            }
            case DELETE_USER:
                return {
                    ...state,users:state.users.filter((el)=>el.id!=payload)
                }
                case EDIT_USER:
                    return {
                        ...state, users:state.users.map(el=>el.id==payload._id?payload:el)
                    }
        default:
           return state
    }
}
export default reducer ;