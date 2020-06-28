import React, {Fragment} from 'react';

const DisplayTodos = (props) => {
    const {todos, fnDeleteTodo, isLoaded} = props;
    return (
        <Fragment>
            {isLoaded ?
                <ul id="myUL">
                    {Object.keys(todos).length ? Object.keys(todos).map((keyName, index) => (
                        <li key={index}>{todos[keyName].data}<span>
                        <i className="fa fa-trash text-danger text-center close" aria-hidden="true"
                           onClick={() => fnDeleteTodo(keyName, todos[keyName].data)}/></span></li>
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