import React from "react";
import ErrorIcon from "./../../assets/images/error/404-error.png";
import Button from "../components/Button/button";
import { redirect } from "react-router-dom";

const Error = () => {
    return (
        <div className="error-404 d-flex align-items-center justify-content-center">
            <div className="container-fluid p-0">
                <div className="card p-5" style={{ height: "100vh" }}>
                    <div className="row g-0 my-auto">
                        <div className="col col-xl-5 text-center text-xl-end">
                            <div className="card-body p-4">
                                <h1 className="display-1">
                                    <span className="text-danger">4</span>
                                    <span className="text-primary">0</span>
                                    <span className="text-success">4</span>
                                </h1>
                                <h2 className="font-weight-bold display-4">
                                    Lost in Space
                                </h2>
                                <p>
                                    You have reached the edge of the universe.
                                    <br />
                                    The page you requested could not be found.
                                    <br />
                                    Dont worry and return to the previous page.
                                </p>
                                <div className="mt-5">
                                    <Button
                                        btnStyle="btn-primary-rounded"
                                        clickHandler={() => {
                                            window.location.href = "/home";
                                        }}
                                    >
                                        {" "}
                                        Go Home{" "}
                                    </Button>
                                    <Button
                                        btnStyle="btn-outline-dark-rounded"
                                        clickHandler={() => {
                                            window.history.back();
                                        }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 p-0 text-center text-xl-start">
                            <img
                                src={ErrorIcon}
                                className="img-fluid"
                                alt=""
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
