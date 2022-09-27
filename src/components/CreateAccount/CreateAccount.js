import style from "./CreateAccount.module.scss";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import { createAccount } from "../../Services/signUp";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [values, setValues] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = createAccount(values.email, values.password);
    console.log("createAccount", result);
    if (!result) setError("Error al iniciar Sesión");
    navigate("/enter");
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  return (
    <div>
      <div className="card text-center">
        {/* <div className="card-header">Featured</div> */}

        <div className="card-body mt-5">
          <h5 className="card-title">Welcome to DEV Community </h5>
          <p className="card-text">
            DEV Community is a community of 900,533 amazing developers
          </p>

          <div className="d-grid gap-2 col-3 mx-auto">
            <button className="btn bg-dark btn-primary" type="button">
              Continue with Apple
            </button>
            <button className="btn bg-warning btn-primary" type="button">
              Continue with Google
            </button>
            <button className="btn bg-dark btn-primary" type="button">
              Continue with Github
            </button>
            <button className="btn bg-info btn-primary" type="button">
              Continue with Twitter
            </button>
          </div>

          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUser">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu usuario"
                onChange={handleChange}
                name="email"
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
            <button
              type="submit"
              className={`loginBtn col-lg-10 col-md-10 col-sm-5 btn btn-primary mt-3 mb-3 ${style.editionBtn}`}
            >
              Continue
            </button>
            <br />
            <a href="#" className="registerBtn  ms-4 mt-3 pt-3">
              I forgot my password
            </a>
          </Form>

          <span>
            Already have an account?{" "}
            <a
              href="/enter"
              className={`registerBtn  ms-4 mt-3 pt-3 ${style.decorationOff}`}
            >
              Login
            </a>
          </span>
        </div>

        {/* <div class="card-footer text-muted">2 days ago</div> */}
      </div>
    </div>
  );
};

export default CreateAccount;
