import { useContext, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import AppContext from "../../context/AppContext";
import QRCode from "../../assets/images/qrcode.webp";
import AxiosClient from "../../api/axiosClient";
import ApplicationDetailViewer from "../components/ApplicationDetailViewer/ApplicationDetailViewer"

const Dashboard = () => {
    const { setGredList, setSubjectList, viewApplicationDetails } =
        useContext(AppContext);

    useEffect(() => {
        AxiosClient.get("/gred").then(({ data }) =>
            setGredList((gredList) => {
                return data;
            })
        );

        AxiosClient.get("/subject").then(({ data }) => setSubjectList(data));
    }, []);

    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <main className="page-content position-relative">
                <div className="row row-cols-1 row-cols-lg-1 row-cols-xl-3 row-cols-xxl-3">
                    <div className="col">
                        <div className="card overflow-hidden radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                                    <div className="w-50">
                                        <p>Application</p>
                                        <h4 className="">1000</h4>
                                    </div>
                                    <div className="w-50">
                                        <p className="mb-3 float-end text-success">
                                            999 new application
                                        </p>
                                        <div id="chart1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card overflow-hidden radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                                    <div className="w-50">
                                        <p>Success</p>
                                        <h4 className="">25</h4>
                                    </div>
                                    <div className="w-50">
                                        <p className="mb-3 float-end text-success">
                                            2 Applicator
                                        </p>
                                        <div id="chart2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card overflow-hidden radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
                                    <div className="w-50">
                                        <p>Reject</p>
                                        <h4 className="">100</h4>
                                    </div>
                                    <div className="w-50">
                                        <p className="mb-3 float-end text-danger">
                                            2 Applicator
                                        </p>
                                        <div id="chart3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {viewApplicationDetails && <ApplicationDetailViewer />}

                <section
                    className={viewApplicationDetails ? "d-none" : "d-block"}
                >
                    <div className="row">
                        <div className="col-12 col-lg-12 col-xl-8 d-flex">
                            <div className="card radius-10 w-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center py-2">
                                        <h6 className="mb-0">
                                            Application List
                                        </h6>
                                    </div>
                                    <div className="table-responsive mt-2">
                                        <ApplicationList />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 col-xl-4 d-flex">
                            <div className="card radius-10 w-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center py-2">
                                        <h6 className="mb-0">Referal Code</h6>
                                    </div>
                                    <div className="mt-2">
                                        <img
                                            src={QRCode}
                                            alt="referal QR"
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="traffic-widget">
                                        <div className="progress-wrapper">
                                            <p>
                                                kaia.azriperisiben.online/application?ID=FP03598
                                            </p>
                                            <div>
                                                <div className="d-flex align-items-center gap-3 fs-6">
                                                    <span className="fw-bold">
                                                        Share referal link:
                                                    </span>
                                                    <a
                                                        className="text-danger"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title=""
                                                        data-bs-original-title="Download QR"
                                                        aria-label="Views"
                                                    >
                                                        <i className="bi bi-image"></i>
                                                    </a>
                                                    <a
                                                        className="text-secondary"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title=""
                                                        data-bs-original-title="Copy Clipboard"
                                                        aria-label="Views"
                                                        onClick={() => {
                                                            notify(
                                                                "Copied to ClipBoard"
                                                            );
                                                        }}
                                                    >
                                                        <i className="bi bi-copy"></i>
                                                    </a>
                                                    <a
                                                        className="text-success"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title=""
                                                        data-bs-original-title="Share Whatsapp"
                                                        aria-label="Views"
                                                    >
                                                        <i className="bi bi-whatsapp"></i>
                                                    </a>
                                                    <a
                                                        className="text-info"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="bottom"
                                                        title=""
                                                        data-bs-original-title="Share"
                                                        aria-label="Views"
                                                    >
                                                        <i className="bi bi-facebook"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};



const ApplicationList = () => {
    const {
        applicationList,
        setApplicationList,
        setViewApplicationDetails,
        notify,
    } = useContext(AppContext);

    useState(() => {
        AxiosClient.get("/application?sort=")
            .then(({ data }) => setApplicationList(data))
            .catch((err) => {
                if (err.response.status === 404) {
                    notify(err.message + " Try again later");
                }
            });
    }, []);

    return (
        <table className="table align-middle mb-0 table-hover hover-cursor">
            <thead className="table-light">
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Phone (mobile)</th>
                    <th>Phone (house)</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {applicationList.map((application) => {
                    let {
                        application_id,
                        name,
                        mobilephoneno,
                        housephoneno,
                        email,
                    } = application;

                    return (
                        <tr
                            onClick={() => {
                                setViewApplicationDetails(application);
                            }}
                            className="bg-danger"
                            key={`application${application_id}`}
                        >
                            <td>
                                <div>
                                    <h6 className="mb-1">{name}</h6>
                                </div>
                            </td>
                            <td>Apr 8, 2021</td>
                            <td>
                                <a
                                    className="d-block"
                                    href={"tel:" + mobilephoneno}
                                >
                                    {mobilephoneno}
                                </a>
                            </td>
                            <td>
                                <a href={"tel:" + housephoneno}>
                                    {housephoneno}
                                </a>
                            </td>
                            <td>
                                <a href="mailto:azriperisiben96@gmail.com">
                                    {email}
                                </a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Dashboard;
