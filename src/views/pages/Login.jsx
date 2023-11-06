import React from "react";
import authImage from "../../assets/images/error/auth-img-7.png";
import Button from "../components/Button/button";

import googleLogo from "../../assets/images/icons/search.svg";

const Login = () => {
    let handleOnChange = (e) => {};

    React.useEffect(()=>{
        $(".navbar").toggleClass("d-none");
    },[])

    return (
        <main className="authentication-content">
            <div className="container d-flex" style={{height:'100vh'}}>
                <div className="align-self-center">
                    <div className="card rounded-0 overflow-hidden shadow-none border mb-5 mb-lg-0">
                        <div className="row g-0">
                            <div className="col-12 order-1 col-xl-8 d-flex align-items-center justify-content-center border-end">
                                <img
                                    src={authImage}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="col-12 col-xl-4 order-xl-2">
                                <div className="card-body p-4 p-sm-5">
                                    <h5 className="card-title">Log In</h5>
                                    <p className="card-text mb-4">
                                        Easy management for KPTM application
                                    </p>
                                    <form className="form-body">
                                        <div className="d-grid">
                                            <Button btnStyle="btn-light" clickHandler={()=>{}}>
                                                <span className="d-flex justify-content-center align-items-center">
                                                    <img
                                                        className="me-2"
                                                        src={googleLogo}
                                                        width="16"
                                                        alt=""
                                                    />
                                                    <span>
                                                        Sign in with Google
                                                    </span>
                                                </span>
                                            </Button>
                                        </div>
                                        <div className="login-separater text-center mb-4">
                                            {" "}
                                            <span>OR SIGN IN WITH EMAIL</span>
                                            <hr />
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label
                                                    htmlFor="inputEmailAddress"
                                                    className="form-label"
                                                >
                                                    Email Address
                                                </label>
                                                <div className="ms-auto position-relative">
                                                    <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                                        <i className="bi bi-envelope-fill"></i>
                                                    </div>
                                                    <input
                                                        type="email"
                                                        className="form-control radius-30 ps-5"
                                                        id="inputEmailAddress"
                                                        placeholder="Email"
                                                        onChange={(e) => {
                                                            handleOnChange(e);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="inputChoosePassword"
                                                    className="form-label"
                                                >
                                                    Enter Password
                                                </label>
                                                <div className="ms-auto position-relative">
                                                    <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                                                        <i className="bi bi-lock-fill"></i>
                                                    </div>
                                                    <input
                                                        type="password"
                                                        className="form-control radius-30 ps-5"
                                                        id="inputChoosePassword"
                                                        placeholder="Password"
                                                        onChange={(e) => {
                                                            handleOnChange(e);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="flexSwitchCheckChecked"
                                                        checked=""
                                                        onChange={(e) => {
                                                            handleOnChange(e);
                                                        }}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexSwitchCheckChecked"
                                                    >
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6 text-end">
                                                {" "}
                                                <a href="authentication-forgot-password.html">
                                                    Forgot Password ?
                                                </a>
                                            </div>
                                            <div className="col-12 mt-5">
                                                <div className="d-grid">
                                                    <Button
                                                        btnStyle="btn-primary-rounded"
                                                        clickHandler={() => {}}
                                                        href="/dashboard"
                                                    >
                                                        Log In
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
