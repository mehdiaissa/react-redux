import React from "react"
import { Button,Modal,Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addnewtodo } from "../action/Action"

const Addtask =() =>{
    const[show,setSow]=useState(false)
    const[newTask,setNewTask]=useState("")
    const dispatch=useDispatch()
    const addFunc=()=>{
        dispatch(addnewtodo(newTask))
    }
    const handleClose = ()=>setSow(false);
    const handleShow = ()=>setSow(true);
    return(
        <div>
            <Button 
            style={{
                marginLeft:"45%",
                backgroundColor:"abOddb",
                border:"solid 2px white",
                fontWeight:"bold"
            }}
            variant="primary"
            onClick={handleShow}
            >
                Add New Task
                </Button>
                <Modal show={show} onHide={handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Task </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Control
                            type="text"
                            placeholder="New Task"
                            onChange={(e)=>
                            setNewTask(e.target.value)}
                            />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary"
                                onClick={handleClose}>
                                    close
                                    </Button>
                                    <Button variant="primary"
                                    onClick={addFunc}>
                                        Add New Task
                                        </Button>
                                        </Modal.Footer>
                                        </Modal>
                                        
        </div>
    )
    
}
export default Addtask