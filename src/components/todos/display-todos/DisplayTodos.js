import React, {Fragment} from 'react';

const DisplayTodos = (props) => {
    const {todos, fnFetchTodo, fnDeleteTodo, isLoaded} = props;
    return (
        <Fragment>
            {isLoaded ?
                <ul id="myUL">
                    {Object.keys(todos).length ? Object.keys(todos).map((keyName, index) => (
                        <li key={index} onClick={() => fnFetchTodo(keyName, todos[keyName].data)}>
                            {todos[keyName].data}<span>
                        <i className="fa fa-trash text-danger text-center close" aria-hidden="true"
                           onClick={(e) => fnDeleteTodo(e, keyName, todos[keyName].data)}/></span></li>
                    )) : <li>Records not found!</li>
                    }
                </ul> : <div className={'text-center mt-4'}>
                    <div className="spinner-border text-primary"/>
                </div>
            }
        </Fragment>
    );
};
export default DisplayTodos;