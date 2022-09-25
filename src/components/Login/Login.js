import style from "./Login.module.scss"


const Login = ()=>{


    
    return(
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
                    
                    <br/>
                    
                    <h5 className={`${style.textInput}`}>Email</h5>
                    
                    <input className={`col-lg-10 col-md-10 col-sm-5 emailInput ${style.editionInputInf}`} type="text"/>
                    
                    <br/>

                    <h5 className={`mt-3 ${style.textInput}`}>Password</h5>
                    
                    <input className={`col-lg-10 col-md-10 col-sm-5 passwordInput ${style.editionInputInf}`} type="password"/>
          
                    <br/>
                    
                        <a href="#" className={`loginBtn col-lg-10 col-md-10 col-sm-5 btn btn-primary mt-3 mb-3 ${style.editionBtn}`}>Continue</a>
                        <br/>
                        <a href="#" className="registerBtn  ms-4 mt-3 pt-3">I forgot my password</a>
                    
                </div>

                {/* <div class="card-footer text-muted">2 days ago</div> */}
            </div>
        </div>
    )
}

export default Login