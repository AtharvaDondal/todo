import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import { todoSelector,deleteTodo,toggle } from "../../redux/reducers/todoReducer";
import styles from "./ToDoList.module.css";



function ToDoList({setTodoText}) {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;
  const handleEdit = (index) => {
    const todo = todos[index];
    setTodoText(todo.text);
    disptach(deleteTodo(index));
  };


  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={todo.id}>
          <>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(actions.toggle(index))}}
          >Toggle</button>
          <button onClick={() => disptach(actions.deleteTodo(index))}>Delete</button>
          <button onClick={() => handleEdit(index)}>
              Edit
            </button>
          </>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;