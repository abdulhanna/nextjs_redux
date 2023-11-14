
import { createSlice,nanoid,current } from "@reduxjs/toolkit";

const initialState = {
    // user: null,
  users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) :[],
// users:[]
};

 const Slice = createSlice({
    name:'addUserSlice',
  initialState,
  reducers:{
     addUser:(state,action)=>{
        // console.log(action,'d')
        const data = {
            id:nanoid(),
            name: action.payload.name,
            // email: action.payload.email,
            // password: action.payload.password,
        }
        state.users=[...state.users,data];
        //  console.log(state.users,'dd',current(state.users))
        let userData = JSON.stringify(state.users)
        localStorage.setItem('users',userData)
      },
       deleteUser:(state,action) =>{
        const data = state.users.filter((user)=>{
            return user.id !== action.payload.id
        })
        state.users = data
         let userData = JSON.stringify(state.users)
        localStorage.setItem('users',userData)
        // console.log(action,'remove')
     }
  }
})

export const {addUser,deleteUser} = Slice.actions;
export default Slice.reducer