import React, {Fragment, useCallback, useEffect, useState} from 'react';
import './addtodos.css';
import {Button, Form, FormGroup, Input} from "reactstrap";
import {addTodos, deleteTodos, fetchTodos} from "../../../services/api/api";
import DisplayTodos from "../display-todos/DisplayTodos";

function AddTodos() {
    const [todos, setTodo] = useState({});
    const [addTodo, setTodos] = useState("");
    const [isLoaded, setLoader] = useState(false);
    useEffect(() => {
        fetchTodos().then((response) => {
            if (response) {
                setTodo(response);
                setLoader(true);
            }
        });
    }, []);
    const fnAddTodo = useCallback((todo) => {
        addTodos(todo);
        fetchTodos().then((response) => {
            setTodo(response);
            setTodos("");
        });
    }, []);
    const fnDeleteTodo = useCallback((id) => {
        deleteTodos(id);
        fetchTodos().then((response) => {
            setTodo(response);
        });
    }, []);
    return (
        <Fragment>
            <div className={'w-75 m-auto'}>
                <div id="myDIV" className="header">
                    <h2>My To Do List</h2>
                    <Form className="login-container d-flex">
                        <FormGroup className={'w-100'}>
                            <Input type={"text"}
                                   value={addTodo}
                                   placeholder="Title..."
                                   onChange={(e) => setTodos(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className={'d-flex justify-content-center align-items-center'}>
                            <Button className={'ml-3'} color="primary" onClick={() => fnAddTodo(addTodo)}>Add</Button>
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    <DisplayTodos
                        todos={todos}
                        fnDeleteTodo={fnDeleteTodo}
                        isLoaded={isLoaded}/>
                </div>
            </div>
        </Fragment>
    );
}

export default AddTodos;