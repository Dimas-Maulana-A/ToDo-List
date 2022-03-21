import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./add.css";
import del from "./delete.png";
import update from "./update.png";


const ToDoList = () => {

    const [todo, setTodo] = useState([]);

    useEffect(()=> {
        getTodo();
    }, []);

    const getTodo = async() =>{
        const response = await axios.get('http://localhost:5000');
        setTodo(response.data);
    }

    const deleteList = async(id) => {
        await axios.delete(`http://localhost:5000/${id}`);
        getTodo();
    }

    const stts = async(id) =>{
        let status = ["complete", "uncomplete"];
        if (status === "complete"){
            <p>complete</p>
        }else if(status=== "uncomplete"){
            <p>uncomplete</p>
        }
    }

    return(
        <div className="container">
            <Link to="/add" className="btn addlist">+ Add New</Link>
            <table className="tabel">
                <tbody className="tbody">
                    { todo.map((todo, index) =>(
                        <tr key={todo.id}>
                            <td className="tdata theader">
                                <div className="table-div title">
                                    { todo.title }
                                </div>
                                <div className="table-div deadline">
                                    { todo.deadline }
                                </div>
                                {/* <div className="table-div">
                                    { timer }
                                </div> */}
                                <div className="table-div action">
                                    <input type="checkbox" className="check" value={ stts } />
                                    <Link to={`/edit/${todo.id}`} className="button"><img className="update icon" src={update}/></Link>
                                    <Link onClick={ () => deleteList(todo.id) } className="button"><img className="del icon" src={del}/></Link>
                                </div>
                            </td>
                        </tr>
                    )) }
                    
                </tbody>
            </table>
        </div>
    )}


export default ToDoList;
