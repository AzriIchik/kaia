import React from "react";
import brandLogo from "../../../assets/images/logo-icon.png";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white rounded-0 border-bottom fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={brandLogo} width="140" alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href={`/application?ID=${
                                        localStorage.getItem("STAFFID")
                                            ? localStorage.getItem("STAFFID")
                                            : import.meta.env
                                                  .VITE_DEFAULT_STAFF_ID
                                    }`}
                                >
                                    Application
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    Campus{" "}
                                    <i className="bi bi-chevron-down align-middle ms-2"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    Course{" "}
                                    <i className="bi bi-chevron-down align-middle ms-2"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Contact Us</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown  mx-auto">
                                <a
                                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    Staff
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            How to register
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Disclaimer
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex ms-3 gap-3">
                            <a
                                href="/login"
                                className="btn btn-primary btn-sm px-4 radius-30 mx-auto"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
