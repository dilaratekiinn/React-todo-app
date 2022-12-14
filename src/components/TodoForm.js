import React, {useState} from 'react'

function TodoForm(props) {
const [input,setİnput] = useState('')

const handleChange = e => {
  setİnput(e.target.value);
};

const handleSubmit = e => {
  e.preventDefault();

  props.onSubmit({

 id: Math.floor(Math.random() * 1000),
  text: input
});
 


setİnput('');
};

  return ( 
  <form className='todo-form' onSubmit={handleSubmit}>
    <input type="text" placeholder='Add a todo'value={input} name ="text" className='todo-input'onChange={handleChange} />
    <button className='todo-button'>Add todo</button>
     


    
    </form>
  );
}

export default TodoForm;
