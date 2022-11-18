import React, { useState } from 'react';
import UpdateTask from './UpdateTask';
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import './App.css';
const List = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const updateTask = (obj) => {
        updateListArray(obj, index)
    }
    const handleDelete = () => {
        deleteTask(index)
    }
    return (
        <div className='shadow-sm border border-info rounded p-2 mt-3'>
           
                <span className="card-header mt-2  rounded me-2" >{taskObj.Name}</span>
                <div className='float-end shadow-sm me-2'>
                    <Button variant='me-3'><FaPen onClick={() => setShow(true)} /></Button>
                    <Button variant='me-3' > <IoTrashBin onClick={handleDelete} />  </Button>  
                </div>
                <span className="card-head2 mt-2  rounded me-2" >{taskObj.Date} </span>

                <p className="mt-3 text-primary mb-3 ">{taskObj.Description}</p> 
           
            <UpdateTask show={show} handleClose={handleClose} updateTask={updateTask} taskObj={taskObj} />
           
        </div>
    );
};

export default List;