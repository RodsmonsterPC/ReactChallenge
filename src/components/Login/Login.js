import React, { useState } from "react";
import Form from "react-bootstrap/Form"
import { Alert } from "react-bootstrap";

import { useUser } from "../context/UserContext";

import style from "./Login.module.scss"


const Login = () => {


    const [values, setValues] = useState();
    const [error, setError] = useState(null);
    const { login } = useUser()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('values', values)
        const result = login(values.user, values.password)
        if (!result) setError("Error al iniciar Sesión")
        console.log('result', result)
    };

    const handleChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value });


return (
    <div className={`${style.styleBodyLogin}`}>
        <div className={`card text-center ${style.sectionCentral}`}>
            {/* <div class="card-header">Featured</div> */}

            <div className="card-body mt-5">
                <h1 className={`card-title ${style.titleEdition}`}>Welcome to DEV Community 👩‍💻👨‍💻</h1>
                <p className="card-text"><a href="#" className={`registerBtn  ms-4 mt-3 pt-3 ${style.subtitleEdition}`}>DEV Community</a>👩‍💻👨‍💻 is a community of 900,533 amazing developers</p>

                <div className="d-grid gap-2 col-lg-10 col-sm-10 mx-auto">
                    <button className="btn bg-dark btn-primary" type="button">Continue with Apple</button>
                    <button className="btn bg-warning btn-primary" type="button">Continue with Google</button>
                    <button className="btn bg-dark btn-primary" type="button">Continue with Github</button>
                    <button className="btn bg-info btn-primary" type="button">Continue with Twitter</button>
                </div>

                <br />



{/*                 
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <h5 className={`${style.textInput}`}>Email</h5>

                    <input onChange={handleChange} name="user" className={`col-lg-10 col-md-10 col-sm-5 emailInput ${style.editionInputInf}`} type="text" />

                    <br />

                    <h5 className={`mt-3 ${style.textInput}`}>Password</h5>

                    <input className={`col-lg-10 col-md-10 col-sm-5 passwordInput ${style.editionInputInf}`} type="password" />

                    <br />

                    <button type="submit" href="#" className={`loginBtn col-lg-10 col-md-10 col-sm-5 btn btn-primary mt-3 mb-3 ${style.editionBtn}`}>Continue</button>
                    <br />
                    <a href="#" className="registerBtn  ms-4 mt-3 pt-3">I forgot my password</a> 
                </form>    
                */}


                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUser">
                        <Form.Label >Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu usuario"
                            onChange={handleChange}
                            name="user"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <button type="submit" className={`loginBtn col-lg-10 col-md-10 col-sm-5 btn btn-primary mt-3 mb-3 ${style.editionBtn}`}>Continue</button>
                    <br/>
                    <a href="#" className="registerBtn  ms-4 mt-3 pt-3">I forgot my password</a>
                </Form>

            </div>

            {/* <div class="card-footer text-muted">2 days ago</div> */}
        </div>
    </div>
)
}

export default Login