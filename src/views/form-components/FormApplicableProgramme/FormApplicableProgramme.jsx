import React from "react";
import AppContext from "../../../context/AppContext";

const FormApplicableProgramme = () => {
    const { applicationProgrammeCampus } = React.useContext(AppContext);

    return (
        <div className="card">
            <div className="card-body">
                <div className="border p-4 rounded">
                    <div className="card-title d-flex align-items-center">
                        <h5 className="mb-0">APPLICABLE PROGRAMME</h5>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="accordion">
                                {applicationProgrammeCampus.map(
                                    (applicableProgramme, i) => {
                                        return (
                                            <ApplicableProgramme
                                                key={i}
                                                programmeName={
                                                    applicableProgramme.name
                                                }
                                                campusList={
                                                    applicableProgramme.campuses
                                                }
                                                applicationId={
                                                    applicableProgramme.code
                                                }
                                            ></ApplicableProgramme>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ApplicableProgramme = (props) => {
    const { programmeName, campusList, applicationId } = props;
    const { programmeSelected, setProgrammeSelected, notify, disableSend } =
        React.useContext(AppContext);

    return (
        <div className="accordion-item border-dark">
            <h2 className="accordion-header">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-${applicationId}`}
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                >
                    <span className="fw-bold">
                        ({applicationId}) {programmeName}
                    </span>
                </button>
            </h2>
            <div
                id={`panelsStayOpen-${applicationId}`}
                className="accordion-collapse collapse"
            >
                <div className="accordion-body">
                    {campusList.map((campus) => {
                        return (
                            <div
                                key={campus.name + programmeName}
                                className="form-check form-switch my-3"
                            >
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={campus.id}
                                    name={campus.id}
                                    disabled={!disableSend}
                                    onClick={(e) => {
                                        if (e.target.checked) {
                                            if (programmeSelected.length > 2) {
                                                e.target.checked = false;
                                                notify(
                                                    "Hanya Pilih 3 Program/Tempat"
                                                );
                                            } else
                                                setProgrammeSelected([
                                                    ...programmeSelected,
                                                    {
                                                        campus: campus,
                                                        programme:
                                                            applicationId,
                                                    },
                                                ]);
                                        } else {
                                            setProgrammeSelected(
                                                programmeSelected.filter(
                                                    (selection) => {
                                                        if (
                                                            selection["campus"][
                                                                "campus_id"
                                                            ] ==
                                                                campus[
                                                                    "campus_id"
                                                                ] &&
                                                            selection[
                                                                "programme"
                                                            ] == applicationId
                                                        )
                                                            return false;
                                                        else return true;
                                                    }
                                                )
                                            );
                                        }
                                    }}
                                />
                                <label className="form-check-label">
                                    {campus.name} Campus
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FormApplicableProgramme;
