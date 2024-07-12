const { createSlice } = require("@reduxjs/toolkit")


const initialState={
    
    todos: JSON.parse(localStorage.getItem('todos')) || [],

}

// Creating Reducer using Redux Toolkit

const todoSlice = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        // this is add action
        add:(state, action)=>{
                state.todos.push({
                    text:action.payload,
                    completed: false
                })
                localStorage.setItem('todos', JSON.stringify(state.todos));

        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((_, index) => index !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
          },
        toggle:(state, action)=>{
            state.todos.map((todo, i)=>{
                if(i===action.payload){
                    todo.completed=!todo.completed;
                }
                return todo;
            })
            localStorage.setItem('todos', JSON.stringify(state.todos));

        }
    }
});

export const todoReducer=todoSlice.reducer;

export const actions = todoSlice.actions;
export const { add, deleteTodo, toggle } = todoSlice.actions;


// selector
export const todoSelector = (state)=>state.todoReducer.todos;



// Reducer using redux

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }