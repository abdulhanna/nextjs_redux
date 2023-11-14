import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
     todos: JSON.parse(localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')) :[]
}

const Slice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{  
            const data = {
                id:nanoid(),
                name:action.payload
            }
            state.todos.push(data)
            let todolist = JSON.stringify(state.todos)
            localStorage.setItem('todo',todolist)
         }
    }
})


export const { addTodo } = Slice.actions
export default Slice.reducer