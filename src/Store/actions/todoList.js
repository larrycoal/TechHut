import {CREATE_TODO} from './types'
//import axios from 'axios'

//const UserServer = "/api/user"
    //let response = axios.post(`${UserServer}/login`,datatoSubmit).then((res)=>res.data)

export const createTodo = (todo)=>{
    return {
        type:CREATE_TODO,
        payload:todo
    }
}