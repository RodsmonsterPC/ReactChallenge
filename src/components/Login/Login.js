import style from "./Login.module.scss";

const Login = ({ email, password, setEmail, setPassword }) => {

   const handleSubmit = () =>{
    
   }
  return (
    <div>
      <div className="card text-center">
        {/* <div class="card-header">Featured</div> */}

        <div className="card-body mt-5">
          <h5 className="card-title">Welcome to DEV Community </h5>
          <p className="card-text">
            DEV Community is a community of 900,533 amazing developers
          </p>

          <div className="d-grid gap-2 col-lg-5 col-sm-5 mx-auto">
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

          <h5 className="">Email</h5>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="col-lg-5 col-sm-5 emailInput"
            type="text"
          />

          <br />

          <h5 className="mt-3">Password</h5>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="col-lg-5 col-sm-5 passwordInput"
            type="password"
          />

          <br />

          <button
          onClick={()=> handleSubmit}
            href="#"
            className="loginBtn col-lg-5 col-sm-5 btn btn-primary mt-3 mb-3"
          >
            Continue
          </button>
          <br />
          <a href="#" className="registerBtn  ms-4 mt-3 pt-3">
            I forgot my password
          </a>
        </div>

        {/* <div class="card-footer text-muted">2 days ago</div> */}
      </div>
    </div>
  );
};

export default Login;
