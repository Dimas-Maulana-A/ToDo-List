import {useState} from 'react';
import "./add.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddList = () => {
  const [title,setTitle] = useState('');
  const [deadline,setDeadline] = useState('');
  const [status,setStatus] = useState('');
  const history = useHistory();

  const saveList = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000', {
      title: title,
      deadline: deadline,
      status: status
    })
    history.push("/");
    alert("Add Success")
  }

  return(
    <div className='container2'>
      <h1>Planning</h1>
      <form onSubmit={ saveList }>
        <div className='sub'>
          <label>Title</label>
        </div>
        <div className='form'>
          <input 
            type="text" 
            placeholder='Masukkan Plan' 
            name='title' 
            className='form-control'
            value={title}
            onChange={ (e) => setTitle(e.target.value)}
          />
        </div>
        <div className='sub'>
          <label>Deadline</label>
        </div>
        <div className='form'>
          <input 
            type="date" 
            name='deadline' 
            className='form-control'
            value={deadline}
            onChange={ (e) => setDeadline(e.target.value)}
          />
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddList;