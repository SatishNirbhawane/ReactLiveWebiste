import React from "react";

const Login = () => {
    return (<>
        <div className="my-5">
            <h1 className="text-center">Login</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                        </div>
                        <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Password" />
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary " style={{marginRight:40}} type="submit">Login </button>
                            <button  class="btn btn-primary mr-auto" type="submit">Register </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>);
}
export default Login;