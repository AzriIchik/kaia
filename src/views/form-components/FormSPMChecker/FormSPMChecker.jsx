import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../../context/AppContext";
import Button from "../../components/Button/button";
import AxiosClient from "../../../api/axiosClient";

const FormSPMChecker = () => {
    const {
        setApplicationCourseCampus,
        setProgrammeSelected,
        notify,
        disableSend,
        verifySPMForm,
        applicationForm,
        setApplicationForm,
        subjectList,
        setSubjectList,
        gredList,
        setGredList,
    } = useContext(AppContext);

    const [addedSubject, setAddedSubject] = useState([]);
    const [checkingResult, setCheckingResult] = useState(false);
    const spmform = useRef();

    const addSubjectHandler = (subject) => {
        setAddedSubject([...addedSubject, subject]);

        setSubjectList(
            subjectList.filter((subject2) => subject2.name != subject.name)
        );
    };

    const removeSubjectHandler = (subject) => {
        if (subject.mandatory) {
            notify("Subject Wajib Tidak Boleh Dipadam");
            return;
        }

        setSubjectList([...subjectList, subject]);

        setAddedSubject(
            addedSubject.filter((subject2) => subject2.name != subject.name)
        );
    };

    const searchInputHandler = (e) => {
        let searchValue = e.target.value.toLowerCase();

        $("#subjectListContainer")
            .children("a")
            .each((index, button) => {
                let butttonValue = $(button)
                    .children("span")
                    .html()
                    .toString()
                    .toLowerCase();

                if (butttonValue.includes(searchValue)) {
                    $(button).css("display", "block");
                } else {
                    $(button).css("display", "none");
                }
            });
    };

    useEffect(() => {
        $("#showAddedBtn").addClass("animate__animated animate__pulse");
    }, [addedSubject]);

    useEffect(() => {
        $("#showAddedBtn").on("animationend", () => {
            $("#showAddedBtn").removeClass("animate__animated animate__pulse");
        });

        AxiosClient.get("/gred").then(({ data }) =>
            setGredList((gredList) => {
                return data;
            })
        );

        AxiosClient.get("/subject").then(({ data }) =>
            setSubjectList((curSubjectList) => {
                let mandatorySubject = data.filter(
                    (subject) => subject.mandatory == 1
                );

                setAddedSubject(mandatorySubject);

                return data.filter((subject) => subject.mandatory != 1);
            })
        );
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <div className="border p-4 rounded">
                    <div className="card-title d-flex justify-content-between">
                        <h5 className="mb-0 fw-bold">SPM RESULT</h5>

                        {/*<Button btnStyle="btn-primary" customclassName="btn-lg">
                            {" "}
                            <i className="bi bi-qr-code-scan mx-2"></i>
                            SCAN SLIP
                        </Button>*/}
                    </div>
                    <hr />

                    <form ref={spmform} id="spm-form" className="row mb-3">
                        {addedSubject.map((data) => (
                            <GredOptionInput
                                key={data.name}
                                id={data.id}
                                subject={data.name}
                                gredList={gredList}
                            ></GredOptionInput>
                        ))}

                        <div className="ms-md-auto col-md-6 text-center text-md-end">
                            <button
                                type="button"
                                className="btn btn-primary mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#SPMSubjectEditorModal"
                                disabled={!disableSend}
                                onClick={() => {
                                    setApplicationCourseCampus([]);
                                    setProgrammeSelected([]);
                                }}
                            >
                                SELECT SUBJECT
                            </button>

                            {checkingResult ? (
                                <button
                                    className="btn btn-primary ms-1"
                                    type="button"
                                    disabled
                                >
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    <span>CHECKING</span>
                                </button>
                            ) : (
                                <Button
                                    clickHandler={() => {
                                        if (!disableSend) {
                                            notify(
                                                "Disagree Agrrement if you want to edit"
                                            );
                                            return;
                                        }

                                        if (!verifySPMForm()) return;

                                        // set application form data
                                        let SPMResult = [];
                                        let resultForm =
                                            document.getElementById("spm-form");
                                        let result = new FormData(resultForm);

                                        for (const subject of result.entries()) {
                                            SPMResult.push({
                                                subject: subject[0],
                                                gred: subject[1],
                                            });
                                        }

                                        setApplicationForm({
                                            ...applicationForm,
                                            ["spmresult"]:
                                                JSON.stringify(SPMResult),
                                        });

                                        // Start Checking
                                        setCheckingResult(true);
                                        setApplicationCourseCampus([]);
                                        AxiosClient.post(
                                            "/programme/check",
                                            result
                                        ).then(({ data }) => {
                                            setProgrammeSelected([]);
                                            setApplicationCourseCampus(data);
                                            setCheckingResult(false);
                                        });
                                    }}
                                    btnStyle={"btn-primary"}
                                >
                                    CHECK
                                </Button>
                            )}
                        </div>
                    </form>

                    <div
                        className="modal fade"
                        id="SPMSubjectEditorModal"
                        aria-labelledby="SPMSubjectEditorModalLabel"
                        data-bs-backdrop="static"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1
                                        className="modal-title fs-5"
                                        id="SPMSubjectEditorModalLabel"
                                    >
                                        SPM Subject
                                    </h1>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="container-fluid p-0">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-group mb-3">
                                                    {" "}
                                                    <span
                                                        className="input-group-text"
                                                        id="basic-addon1"
                                                    >
                                                        <i className="bi bi-search"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => {
                                                            searchInputHandler(
                                                                e
                                                            );
                                                        }}
                                                        placeholder="Search Subject"
                                                        aria-label="search subject"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className="col-lg-6"
                                                style={{
                                                    maxHeight: "50vh",
                                                    overflow: "scroll",
                                                    overflowX: "hidden",
                                                }}
                                            >
                                                <h5 className="position-absolute bg-light p-1 border rounded">
                                                    Subject list{" "}
                                                    <p
                                                        className="mb-0 text-muted"
                                                        style={{
                                                            fontSize: "0.6em",
                                                        }}
                                                    >
                                                        Click to add Subject
                                                    </p>
                                                </h5>
                                                <div
                                                    id="subjectListContainer"
                                                    className="mt-5"
                                                >
                                                    {subjectList.map(
                                                        (subject, i) => (
                                                            <Button
                                                                key={
                                                                    "subjectbtn" +
                                                                    i
                                                                }
                                                                btnStyle="btn-primary"
                                                                customClass={
                                                                    "container-fluid my-1"
                                                                }
                                                                clickHandler={() => {
                                                                    addSubjectHandler(
                                                                        subject
                                                                    );
                                                                }}
                                                            >
                                                                <span className="font-small">
                                                                    {
                                                                        subject.name
                                                                    }
                                                                </span>{" "}
                                                            </Button>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className="col-lg-6 border rounded p-2 bg-light d-none d-lg-block"
                                                id="addedSubjectContainer"
                                                style={{
                                                    maxHeight: "50vh",
                                                    overflow: "scroll",
                                                    overflowX: "hidden",
                                                    zIndex: 999,
                                                }}
                                            >
                                                <h5 className="position-absolute bg-light p-1 border rounded">
                                                    Currently Added{" "}
                                                    <p
                                                        className="mb-0 text-muted"
                                                        style={{
                                                            fontSize: "0.6em",
                                                        }}
                                                    >
                                                        Click to remove subject
                                                    </p>
                                                </h5>
                                                <div className="chip-md d-flex flex-wrap pt-5">
                                                    {addedSubject.map(
                                                        (subject, i) => {
                                                            return (
                                                                <div
                                                                    key={
                                                                        "addedSubject" +
                                                                        i
                                                                    }
                                                                    className="chip chip-lg bg-primary text-white"
                                                                    onClick={() => {
                                                                        removeSubjectHandler(
                                                                            subject
                                                                        );
                                                                    }}
                                                                >
                                                                    {
                                                                        subject.name
                                                                    }
                                                                    <span>
                                                                        <i className="ms-2 bi bi-x-circle-fill fa-10x"></i>
                                                                    </span>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        id="showAddedBtn"
                                        className="btn btn-primary d-block d-lg-none"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addedSubjectModal"
                                    >
                                        Show Added
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="addedSubjectModal"
                data-bs-backdrop="static"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5 className="bg-light p-1 border rounded">
                                Currently Added{" "}
                                <p
                                    className="mb-0 text-muted"
                                    style={{
                                        fontSize: "0.6em",
                                    }}
                                >
                                    Click to remove subject
                                </p>
                            </h5>
                            <div className="chip-md d-flex flex-wrap">
                                {addedSubject.map((subject, i) => {
                                    return (
                                        <div
                                            key={"addedSubject" + i}
                                            className="chip chip-lg bg-primary text-white"
                                            onClick={() => {
                                                removeSubjectHandler(subject);
                                            }}
                                        >
                                            {subject.name}
                                            <span>
                                                <i className="ms-2 bi bi-x-circle-fill fa-10x"></i>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#SPMSubjectEditorModal"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GredOptionInput = ({ subject, id, gredList }) => {
    const { disableSend, setApplicationCourseCampus, setProgrammeSelected } =
        useContext(AppContext);

    return (
        <>
            <label className="col-5 col-form-label text-end">
                {`(${id}) ${subject}`}
            </label>
            <div className="col-7">
                <select
                    className="form-select mb-3 flex-shrink-1"
                    id={`${id}`}
                    name={`${id}`}
                    aria-label={`"Subject Option Input ${subject}"`}
                    onChange={() => {
                        setApplicationCourseCampus([]);
                        setProgrammeSelected([]);
                    }}
                >
                    <option value={0} disabled={!disableSend}>
                        Gred
                    </option>
                    {gredList.map(({ gred, description, id }) => {
                        return (
                            <option key={id} value={id} disabled={!disableSend}>
                                {" "}
                                {`${gred} (${description})`}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
};

export default FormSPMChecker;
