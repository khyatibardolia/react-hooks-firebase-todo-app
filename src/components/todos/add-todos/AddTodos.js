import React, { Fragment, useCallback, useEffect, useState } from 'react';
import './addtodos.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { addTodos, deleteTodos, fetchTodos, updateTodos } from '../../../services/api/api';
import DisplayTodos from '../display-todos/DisplayTodos';

function AddTodos() {
  const [todos, setTodo] = useState({});
  const [addTodo, setTodos] = useState('');
  const [todoid, setTodoId] = useState('');
  const [isEditMode, setEditMode] = useState(false);
  const [isLoaded, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetchTodos().then((response) => {
      console.log('mount', response)
      if (response) {
        setTodo(response);
        setLoader(false);
      } else {
        setLoader(false);
      }
    });
  }, []);
  const fnAddTodo = useCallback((todo) => {
    addTodos(todo);
    fetchTodos().then((response) => {
      setTodo(response);
      setTodos('');
    });
  }, []);
  const fnDeleteTodo = useCallback((e, id) => {
    e.preventDefault();
    e.stopPropagation();
    deleteTodos(id);
    fetchTodos().then((response) => {
      console.log('res', response);
      setTodo(response);
    });
  }, []);

  const fnUpdateTodo = useCallback((id, data, editTodo) => {
    setEditMode(true);
    setTodoId(id);
    setTodos(data);
    if (editTodo) {
      updateTodos(id, data);
      fetchTodos().then((response) => {
        setTodo(response);
        setEditMode(false);
        setTodos('');
      });
    }
  }, []);

  return (
    <Fragment>
      <div className={'todolist-bg-img w-100 h-100'}>
        <div className={'w-100 h-100 m-auto p-4'}>
          <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <Form className="login-container d-flex">
              <FormGroup className={'w-100 mb-0'}>
                <Input type={'text'}
                       value={addTodo}
                       placeholder="Title..."
                       onChange={(e) => setTodos(e.target.value)}/>
              </FormGroup>
              <FormGroup className={'d-flex justify-content-center align-items-center mb-0'}>
                <Button className={'ml-3'} color="primary" onClick={() => {
                  isEditMode ? fnUpdateTodo(todoid, addTodo, true) : fnAddTodo(addTodo);
                }}>
                  {isEditMode ? 'Update' : 'Add'}</Button>
              </FormGroup>
            </Form>
          </div>
          <div>
            <DisplayTodos
              todos={todos}
              fnUpdateTodo={fnUpdateTodo}
              fnDeleteTodo={fnDeleteTodo}
              isLoaded={isLoaded}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddTodos;
