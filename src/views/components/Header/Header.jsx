import React, { useContext, useEffect } from "react";

//later replace
import avatar1 from "../../../assets/images/avatars/avatar-1.png";
import AppContext from "../../../context/AppContext";

let guestName = "Azri";

const Header = () => {
    const { user, setUser } = useContext(AppContext);

    useEffect(() => {
        setUser({
            id: "FP03589",
            name: "Azri Perisiben",
            position: "PENOLONG PENGARAH",
            department: "JTM",
            img: "https://lh3.googleusercontent.com/a/AAcHTtd0i2bQBUyBEu1Se3jlBdsSsth5X7DpxiF7zcpzApoArIA=s288-c-no",
        });
    }, []);

    return (
        <header className="top-header">
            <nav className="navbar navbar-expand gap-3">
                <div className="mobile-toggle-icon fs-3">
                    <i className="bi bi-list"></i>
                </div>

                <div className="top-navbar-right ms-auto">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item dropdown dropdown-large">
                            <a
                                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                <div className="notifications">
                                    <span className="notify-badge">8</span>
                                    <i className="bi bi-bell-fill"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end p-0">
                                <div className="p-2 border-bottom m-2">
                                    <h5 className="h5 mb-0">Notifications</h5>
                                </div>
                                <div className="header-notifications-list p-2">
                                    <NavbarHeaderIconItem
                                        link="#"
                                        icon={
                                            <i className="bi bi-file-earmark-bar-graph-fill"></i>
                                        }
                                        title="Guest Check"
                                        desciption={
                                            "Guest " +
                                            guestName +
                                            " checking application"
                                        }
                                    ></NavbarHeaderIconItem>
                                    <NavbarHeaderIconItem
                                        link="#"
                                        icon={
                                            <i className="bi bi-people-fill"></i>
                                        }
                                        title="Guest Signup"
                                        desciption={
                                            "Guest " +
                                            guestName +
                                            " using your agent account"
                                        }
                                    ></NavbarHeaderIconItem>
                                    <NavbarHeaderIconItem
                                        link="#"
                                        icon={
                                            <i className="bi bi-bookmark-heart-fill"></i>
                                        }
                                        title="Admin Info"
                                        desciption={"PDF download is now ready"}
                                    ></NavbarHeaderIconItem>
                                </div>
                                <div className="p-2">
                                    <div>
                                        <hr className="dropdown-divider" />
                                    </div>
                                    <a className="dropdown-item" href="#">
                                        <div className="text-center">
                                            View All Notifications
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="dropdown dropdown-user-setting">
                    <a
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        href="#"
                        data-bs-toggle="dropdown"
                    >
                        <div className="user-setting d-flex align-items-center gap-3">
                            <img
                                src={user ? user.img : avatar1}
                                className="user-img"
                                alt=""
                            />
                            <div className="d-none d-sm-block">
                                <p className="user-name mb-0">
                                    {" "}
                                    {user ? user.name : ""}{" "}
                                </p>
                                <small className="mb-0 dropdown-user-designation">
                                    {user ? user.position : ""} ({" "}
                                    {user ? user.department : ""} )
                                </small>
                            </div>
                        </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <a
                                className="dropdown-item"
                                href="pages-user-profile.html"
                            >
                                <div className="d-flex align-items-center">
                                    <div className="">
                                        <i className="bi bi-person-fill"></i>
                                    </div>
                                    <div className="ms-3">
                                        <span>Profile</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <div className="d-flex align-items-center">
                                    <div className="">
                                        <i className="bi bi-gear-fill"></i>
                                    </div>
                                    <div className="ms-3">
                                        <span>Setting</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="index2.html">
                                <div className="d-flex align-items-center">
                                    <div className="">
                                        <i className="bi bi-speedometer"></i>
                                    </div>
                                    <div className="ms-3">
                                        <span>Dashboard</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a
                                className="dropdown-item"
                                href="authentication-signup-with-header-footer.html"
                            >
                                <div className="d-flex align-items-center">
                                    <div className="">
                                        <i className="bi bi-lock-fill"></i>
                                    </div>
                                    <div className="ms-3">
                                        <span>Logout</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

const NavbarHeaderIconItem = (props) => {
    const { link, icon, title, desciption } = props;
    const iconDate = "1m";

    return (
        <a className="dropdown-item" href={link}>
            <div className="d-flex align-items-center">
                <div className="notification-box bg-light-primary text-primary">
                    {icon}
                </div>
                <div className="ms-3 flex-grow-1">
                    <h6 className="mb-0 dropdown-msg-user">
                        {title}
                        <span className="msg-time float-end text-secondary">
                            {iconDate}
                        </span>
                    </h6>
                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">
                        {desciption}
                    </small>
                </div>
            </div>
        </a>
    );
};

export default Header;
