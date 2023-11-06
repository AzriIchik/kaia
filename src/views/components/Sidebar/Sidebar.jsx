import React from "react";
import Icon from "../../../assets/images/logo-icon.png";

const Sidebar = () => {
    return (
        <>
            <aside className="sidebar-wrapper" data-simplebar="true">
                <div className="sidebar-header">
                    <div>
                        <img src={Icon} className="logo-icon" alt="logo icon" />
                    </div>
                    <div>
                        <h4 className="logo-text">KAiA</h4>
                    </div>
                    <div className="toggle-icon ms-auto">
                        {" "}
                        <i className="bi bi-list"></i>
                    </div>
                </div>
                <ul className="metismenu" id="menu">
                    <li>
                        <a href="#" target="_blank">
                            <div className="parent-icon">
                                <i className="bi bi-house-fill"></i>
                            </div>
                            <div className="menu-title">Dashboard</div>
                        </a>
                    </li>
                    {false && (
                        <li>
                            <a href="#" className="has-arrow">
                                <div className="parent-icon">
                                    <i className="bi bi-card-list"></i>
                                </div>
                                <div className="menu-title">Application</div>
                            </a>
                            <ul>
                                <li>
                                    {" "}
                                    <a href="app-emailbox.html">
                                        <i className="bi bi-circle"></i>List
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="app-chat-box.html">
                                        <i className="bi bi-circle"></i>Manage
                                    </a>
                                </li>

                                <li>
                                    {" "}
                                    <a href="app-to-do.html">
                                        <i className="bi bi-circle"></i>PDF
                                        Print
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="app-file-manager.html">
                                        <i className="bi bi-circle"></i>History
                                    </a>
                                </li>
                            </ul>
                        </li>
                    )}
                     <li>
                        <a href="#" target="_blank">
                            <div className="parent-icon">
                            <i className="bi bi-person-fill"></i>
                            </div>
                            <div className="menu-title">Profile</div>
                        </a>
                    </li>
                    <li className="menu-label">LINK</li>
                    <li>
                        <a href="#" target="_blank">
                            <div className="parent-icon">
                                <i className="bi bi-building"></i>
                            </div>
                            <div className="menu-title">KPTM</div>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="parent-icon">
                                <i className="bi bi-question-lg"></i>
                            </div>
                            <div className="menu-title">FAQ</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="parent-icon">
                                <i className="bi bi-exclamation-circle"></i>
                            </div>
                            <div className="menu-title">Discalimer</div>
                        </a>
                    </li>
                    <li>
                        <a href="/application">
                            <div className="parent-icon">
                                <i className="bi bi-lock-fill"></i>
                            </div>
                            <div className="menu-title">Logout</div>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;
