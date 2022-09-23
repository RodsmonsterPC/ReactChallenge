import style from "./Login.module.scss"


const Login = ()=>{
    return(
        <div>
            <div class="card text-center">
                {/* <div class="card-header">Featured</div> */}

                <div class="card-body mt-5">
                    <h5 class="card-title">Welcome to DEV Community </h5>
                    <p class="card-text">DEV Community is a community of 900,533 amazing developers</p>
                    
                    <div class="d-grid gap-2 col-3 mx-auto">
                        <button class="btn bg-dark btn-primary" type="button">Continue with Apple</button>
                        <button class="btn bg-warning btn-primary" type="button">Continue with Google</button>
                        <button class="btn bg-dark btn-primary" type="button">Continue with Github</button>
                        <button class="btn bg-info btn-primary" type="button">Continue with Twitter</button>
                    </div>
                    
                    <br/>
                    
                    <h5 class="">Email</h5>
                    
                    <input class="col-3 emailInput" type="text"/>
                    
                    <br/>

                    <h5 class="mt-3">Password</h5>
                    
                    <input class="col-3 passwordInput" type="password"/>
          
                    <br/>

                    <a href="#" class="loginBtn btn btn-primary mt-3">Continue</a>
                    <a href="#" class="registerBtn btn btn-primary ms-4 mt-3">Create account</a>
                </div>

                {/* <div class="card-footer text-muted">2 days ago</div> */}
            </div>
        </div>
    )
}

export default Login