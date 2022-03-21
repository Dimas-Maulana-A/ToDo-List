import {useState, useEffect } from 'react';
import "./add.css";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

const EditList = () => {
  const [title,setTitle] = useState('');
  const [deadline,setDeadline] = useState('');
  const history = useHistory();
  const { id } = useParams();


  const editList = async(e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/${id}`, {
      title: title,
      deadline: deadline
    })
    history.push("/");
    alert("Update Succes");
  }

  useEffect(()=> {
      getTodoById();
  }, []);

  const getTodoById = async() => {
      const response = await axios.get(`http://localhost:5000/${id}`);
      setTitle(response.data.title);
      setDeadline(response.data.deadline);
  }

  return(
    <div className='container2'>
      <h1>Planning</h1>
      <form onSubmit={ editList }>
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
          <button className='btn' type='submit'>Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditList;