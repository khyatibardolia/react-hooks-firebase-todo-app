import React, {useState, useCallback} from 'react';
import './login.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {useHistory} from "react-router-dom";
import {loginWithPassword} from "../../services/firebase/auth";
import * as routes from '../../constants/routes';

function Login() {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMessage] = useState("");
    const [validated, setValidated] = useState(false);
    let history = useHistory();
    const fnLogin = useCallback((emailId, password) => {
        loginWithPassword(emailId, password).then((response) => {
            setValidated(true);
            history.push(routes.ADDTODOS);
        }).catch((error) => {
            if(emailId === '' && password === '') {
                setErrorMessage("The fields are required!")
            } else {
                setErrorMessage(error.message)
            }
        });
    }, [history]);
    return (
        <div className="login">
            <div className="login-triangle"/>
            <h2 className="login-header">Log in</h2>
                <Form className="login-container" noValidate validated={validated}>
                    <FormGroup>
                        <Label for="exampleEmail">Email Id</Label>
                        <Input type={"email"}
                               className={`${errorMsg ? 'is-invalid' : 'is-valid'}`}
                               value={emailId}
                               placeholder="Enter email address"
                               onChange={(e) => setEmailId(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type={"password"}
                               className={`${errorMsg ? 'is-invalid' : 'is-valid'}`}
                               value={password}
                               placeholder="Enter password"
                               onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    {errorMsg ? (<span className={'text-danger mb-2'}>{errorMsg}</span>) : ""}
                    <FormGroup className={'d-flex justify-content-center align-items-center mt-3'}>
                       <Button className={'mr-3'} color="primary" onClick={() => fnLogin(emailId, password)}>Submit</Button>
                       <Button color="secondary" onClick={() => {setEmailId("");setPassword("");setErrorMessage("")}}>Clear</Button>
                    </FormGroup>
                </Form>
        </div>
    );
}
export default Login;