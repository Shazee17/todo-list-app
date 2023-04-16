import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4();

const TodoContainer = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo
    }]);
    console.log(todos);
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id)) 
  }

  return (
    <div className='container'>
        <h1> TO <span>DO</span></h1>
        <TodoForm addTodo={addTodo}/>

        {todos.map((todo, index) => (

            <Todo task={todo} key={index}
            onDelete={() => deleteTodo(todo.id)} />

        ))}
        
    </div>
  )
}

export default TodoContainer