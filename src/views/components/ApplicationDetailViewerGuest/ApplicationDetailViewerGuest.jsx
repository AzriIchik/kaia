import html2canvas from "html2canvas";
import actualApplicationForm from "../../../assets/images/kptmapplicationform.png";
import jsPDF from "jspdf";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const ApplicationDetailViewerGuest = () => {
    const {
        gredList,
        subjectList,
        viewApplicationDetails,
        setViewApplicationDetails,
        notify,
    } = useContext(AppContext);

    let {
        address,
        name,
        icno,
        school_name,
        dob,
        email,
        housephoneno,
        mobilephoneno,
        nationality,
        religion,
        sex,
        updated_at,
        spmresult,
        application_id,
    } = viewApplicationDetails;

    const formatSubject = (spmresult) => {
        const sort = ["1103", "1119", "1449", "1249"];
        let sorted = [];

        sort.forEach((code) => {
            spmresult.forEach((result) => {
                if (code === result.subject) {
                    sorted.push(result);
                }
            });
        });

        sorted = sorted.concat(
            spmresult.filter((result) => !sort.includes(result.subject))
        );

        return sorted;
    };

    const renderGred = (resultGred) => {
        resultGred = parseInt(resultGred);
        for (let i = 0; i < gredList.length; i++) {
            if (resultGred === gredList[i].id) return gredList[i].gred;
        }
    };

    const renderSubject = (resultSubject) => {
        resultSubject = parseInt(resultSubject);
        for (let i = 0; i < subjectList.length; i++) {
            if (resultSubject === subjectList[i].id) {
                let subjectName = subjectList[i].name;
                //limit text length
                if (subjectName.length > 19)
                    return (
                        <span style={{ fontSize: "0.8em", lineHeight: "3em" }}>
                            {subjectName}
                        </span>
                    );
                else return subjectName;
            }
        }
    };

    spmresult = JSON.parse(spmresult);
    spmresult = formatSubject(spmresult);

    return (
        <div className="card float">
            <div className="card-body">
                <div className="border p-4 rounded">
                    <form
                        id={"formViewApplication"}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="card-title d-flex align-items-center">
                            <h6 className="mb-0">Application detail</h6>
                        </div>
                        <hr />
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                                Name
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control hover-cursor"
                                    name="name"
                                    readOnly={true}
                                    value={name}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                                IC no (without - )
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="number"
                                    className="form-control hover-cursor"
                                    name="icno"
                                    value={icno}
                                    readOnly={true}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                                School
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control hover-cursor"
                                    name="schoolname"
                                    value={school_name}
                                    readOnly={true}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                                Date of Birth
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control hover-cursor"
                                    name="schoolname"
                                    value={dob.split(" ")[0]}
                                    readOnly={true}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                                Address
                            </label>
                            <div className="col-sm-9">
                                <textarea
                                    className="form-control hover-cursor"
                                    id="inputAddress4"
                                    rows="3"
                                    name="address"
                                    value={address}
                                    readOnly={true}
                                ></textarea>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                                Phone no (mobile)
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="number"
                                    className="form-control hover-cursor"
                                    name="mobilephoneno"
                                    value={mobilephoneno}
                                    readOnly={true}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                                Phone no (house)
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="number"
                                    className="form-control hover-cursor"
                                    name="housephoneno"
                                    value={housephoneno}
                                    readOnly={true}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="email"
                                    className="form-control hover-cursor"
                                    name="email"
                                    value={email}
                                    readOnly={true}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-3 col-form-label">
                                Nationality
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control hover-cursor"
                                        aria-label="Text input with dropdown button nationality"
                                        name="nationality"
                                        value={nationality}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-3 col-form-label">
                                Religion
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control hover-cursor"
                                        aria-label="Text input with dropdown button religion"
                                        readOnly={true}
                                        value={religion}
                                        name="religion"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-3 col-form-label">
                                Sex
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control hover-cursor"
                                        aria-label="Text input with dropdown button religion"
                                        readOnly={true}
                                        value={sex}
                                        name="sex"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-3 col-form-label">
                                Date applied
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control hover-cursor"
                                        aria-label="Text input with dropdown button religion"
                                        readOnly={true}
                                        value={
                                            updated_at.split("T")[0] +
                                            "  " +
                                            updated_at
                                                .split(".")[0]
                                                .split("T")[1]
                                        }
                                        name="updated_at"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-3 col-form-label">
                                Time applied
                            </label>
                            <div className="col-sm-9">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control hover-cursor"
                                        aria-label="Text input with dropdown button religion"
                                        readOnly={true}
                                        value={
                                            updated_at
                                                .split(".")[0]
                                                .split("T")[1]
                                        }
                                        name="updated_at_time"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="ms-md-auto col-md-6 text-center text-md-end">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                    let formTarget =
                                        document.getElementById(
                                            "downloadFormTarget"
                                        );

                                    notify("Downloading Please Wait");

                                    $(formTarget).toggleClass("d-none");

                                    html2canvas(formTarget).then((canvas) => {
                                        const pdfer = new jsPDF();
                                        const dataURL = canvas.toDataURL(
                                            "image/jpeg",
                                            1.0
                                        );
                                        pdfer.addImage(
                                            dataURL,
                                            "JPEG",
                                            0,
                                            0,
                                            220,
                                            300
                                        );

                                        pdfer.save(
                                            `KPTMApplication(${icno}${application_id}).pdf`
                                        );

                                        notify(
                                            "Finished Downloading, please check download folder"
                                        );

                                        setTimeout(() => {
                                            let gotoMain =
                                                document.createElement("a");
                                            gotoMain.href = "/application";
                                            gotoMain.click();
                                        }, 1000);
                                    });

                                    $(formTarget).toggleClass("d-none");
                                }}
                            >
                                DOWNLOAD FORM
                            </button>
                        </div>
                    </div>

                    <div
                        id="downloadFormTarget"
                        className="p-0 position-relative d-none"
                        style={{ width: "fit-content", height: "fit-content" }}
                    >
                        <img
                            src={actualApplicationForm}
                            style={{ width: "2480px", height: "3508px" }}
                        ></img>
                        <div
                            className="position-absolute p-0 container-fluid"
                            style={{ top: 0, left: 0, height: "100%" }}
                        >
                            <h2
                                className="position-absolute fw-bolder"
                                style={{ top: "965px", left: "460px" }}
                            >
                                {name}
                            </h2>

                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1050px",
                                    left: "460px",
                                    letterSpacing: "44px",
                                }}
                            >
                                {icno}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{ top: "1050px", left: "1415px" }}
                            >
                                {dob.split(" ")[0]}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1135px",
                                    left: "460px",
                                    width: "1770px",
                                }}
                            >
                                {address}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1340px",
                                    left: "460px",
                                }}
                            >
                                {mobilephoneno}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1340px",
                                    left: "1020px",
                                }}
                            >
                                {housephoneno}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1340px",
                                    left: "1620px",
                                }}
                            >
                                {email}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1430px",
                                    left: "460px",
                                }}
                            >
                                {nationality}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1430px",
                                    left: "1620px",
                                }}
                            >
                                {religion}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1430px",
                                    left: "2010px",
                                }}
                            >
                                {sex}
                            </h2>
                            <h2
                                className="position-absolute fw-bolder"
                                style={{
                                    top: "1710px",
                                    left: "420px",
                                }}
                            >
                                {school_name}
                            </h2>
                            <div
                                className="position-absolute p-0 m-0"
                                style={{
                                    top: "1778px",
                                    left: "325px",
                                    width: "440px",
                                    height: "589px",
                                }}
                            >
                                {spmresult.map((result, i) => {
                                    return (
                                        <div
                                            key={"result" + i}
                                            className="mb-1 d-flex justify-content-between"
                                            style={{ height: 55 }}
                                        >
                                            <h2
                                                className="ps-1 m-0 d-inline fw-bolder"
                                                style={{
                                                    width: "fit-content",
                                                    height: "inherit",
                                                    lineHeight: "70px",
                                                }}
                                            >
                                                {i < 4
                                                    ? ""
                                                    : renderSubject(
                                                          result.subject
                                                      )}
                                            </h2>
                                            <h2
                                                className="ps-1 m-0 d-inline text-center fw-bolder"
                                                style={{
                                                    width: "85px",
                                                    height: "inherit",
                                                    lineHeight: "70px",
                                                }}
                                            >
                                                {renderGred(result.gred)}
                                            </h2>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationDetailViewerGuest;
