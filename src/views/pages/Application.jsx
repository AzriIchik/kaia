import FormSPMChecker from "../form-components/FormSPMChecker/FormSPMChecker";
import FormApplicableProgramme from "../form-components/FormApplicableProgramme/FormApplicableProgramme";
import FormApplicationInformation from "../form-components/FormApplicationInformation/FormApplicationInformation";
import { useContext, useEffect, useRef } from "react";
import AppContext from "../../context/AppContext";
import ApplicationDetailViewerGuest from "../components/ApplicationDetailViewerGuest/ApplicationDetailViewerGuest";

const Application = () => {
    const { viewApplicationDetails, setViewApplicationDetails } =
        useContext(AppContext);

    // Staff ID Later for Management
    useEffect(() => {
        var url_string = window.location;
        var url = new URL(url_string);
        var staffID = url.searchParams.get("ID");
        localStorage.setItem("STAFFID", staffID);
    }, []);

    return (
        <div
            className="d-flex"
            style={{
                height: "fit-content",
                marginTop: "10em",
                marginBottom: "10em",
            }}
        >
            <div className="container my-auto">
                <div className="d-flex flex-wrap justify-content-center justify-content-md-between">
                    <h5 className="mb-3 mb-md-0 text-uppercase fw-bold d-flex">
                        <span className="mt-auto text-center">
                            KPTM REQUIREMENT CHECKER
                        </span>
                    </h5>
                </div>
                <hr />

                {viewApplicationDetails ? (
                    <ApplicationDetailViewerGuest></ApplicationDetailViewerGuest>
                ) : (
                    <>
                        <FormSPMChecker></FormSPMChecker>
                        <FormApplicableProgramme></FormApplicableProgramme>
                        <FormApplicationInformation></FormApplicationInformation>
                    </>
                )}
            </div>
            <InstructionModal></InstructionModal>
        </div>
    );
};
export default Application;

const InstructionModal = () => {
    let Modalbtn = useRef();

    useEffect(() => {
        Modalbtn.current.click();
    }, []);

    return (
        <>
            <button
                ref={Modalbtn}
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#instructionModal"
            >
                Launch demo modal
            </button>

            <div
                className="modal fade"
                id="instructionModal"
                aria-labelledby="instructionModalLabel"
                aria-hidden="true"
                data-bs-backdrop="static"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title mx-auto"
                                id="instructionModalLabel"
                            >
                                DISCLAIMER
                            </h5>
                        </div>
                        <div className="modal-body">
                            <h2>
                                This system is still in development phase, and
                                should be treated as prototype and not actually
                                a fully functional system. Additionally it is
                                not a system owned by Kolej Poly-Tech Mara Sdn
                                Bhd (KPTMSB), and currently used as a
                                demonstartion to new introduce a new use of
                                technology for KPTMSB in innovation competition
                                2023 (VICE 2023)
                                <div className="mt-5">
                                    To enquire more please contact (En Azri bin
                                    Perisiben) at{" "}
                                    <a href="tel:0146511665">0146511665</a> /{" "}
                                    <a href="mailto:azriperisiben@gmail.com">
                                        azriperisiben@gmail.com
                                    </a>
                                </div>
                            </h2>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-success mx-auto"
                                data-bs-dismiss="modal"
                            >
                                Start Testing the System
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
