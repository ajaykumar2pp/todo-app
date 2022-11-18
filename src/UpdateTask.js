import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function UpdateTask({show,handleClose,updateTask, taskObj}) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const[date,setDate]=useState();


    const handleChange = (e) => {
        const {name, value, date} = e.target
        if(name === "taskName"){
            setTaskName(value)
        }else if(name==='description'){
            setDescription(value)
        }
        else{
            setDate(value)
            
        }
    }
    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setDate(taskObj.Date)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault()
       
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Date"] = date
        updateTask(taskObj);
   

    }
    return (
        <>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                        <label>Date</label>
                        <input type="date" className = "form-control mt-2 mb-3" value = {date} onChange = {handleChange} name = "date"/>
                    </div>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control mt-2 mb-3" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control mt-2" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>
                      Update
                    </Button>{' '}
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateTask;