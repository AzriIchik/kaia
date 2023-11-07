import { useEffect, useState } from "react";
import SignPad from "../../components/SignPad/SignPad";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import DatePicker from "react-date-picker";

const FormApplicationInformation = () => {
  let {
    applicationForm,
    setApplicationForm,
    verifyApplication,
    sendApplication,
    disableSend,
    isApplying,
    notify,
  } = useContext(AppContext);

  const [religionList, setReligionList] = useState([
    "Muslim",
    "Christian",
    "Hindu",
    "Buddish",
    "Atheist",
  ]);

  const [raceList, setRaceList] = useState([
    "Melayu",
    "Chinese",
    "Indian",
    "Bumiputera Sabah",
    "Bumiputera Sarawak",
  ]);

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setApplicationForm({ ...applicationForm, [key]: value });
  };

  const handleDisable = () => {
    if (!disableSend) notify("Disagree Agrrement if you want to edit");
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="border p-4 rounded">
          <form
            id={"formPersonalInformation"}
            onSubmit={(e) => {
              e.preventDefault();
              sendApplication();
            }}
          >
            <div className="card-title d-flex align-items-center">
              <h5 className="mb-0">PERSONAL INFORMATION</h5>
            </div>
            <hr />
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Name</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={applicationForm.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  readOnly={!disableSend}
                  onClick={() => {
                    handleDisable();
                  }}
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
                  className="form-control"
                  placeholder="IC No"
                  name="icno"
                  value={applicationForm.icno}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  readOnly={!disableSend}
                  onClick={() => {
                    handleDisable();
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">School</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your School Name"
                  name="schoolname"
                  value={applicationForm.schoolname}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  readOnly={!disableSend}
                  onClick={() => {
                    handleDisable();
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Date of Birth</label>
              <div className="col-sm-9">
                <DatePicker
                  onChange={(e) => {
                    let newDate = {
                      target: {
                        name: "dob",
                        value: e,
                      },
                    };
                    handleChange(newDate);
                  }}
                  value={applicationForm.dob}
                  disabled={!disableSend}
                  onClick={() => {
                    handleDisable();
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Address</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  id="inputAddress4"
                  rows="3"
                  placeholder="Address"
                  name="address"
                  value={applicationForm.address}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  readOnly={!disableSend}
                  onClick={() => {
                    handleDisable();
                  }}
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
                  className="form-control"
                  placeholder="0123456789"
                  name="mobilephoneno"
                  value={applicationForm.mobilephoneno}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  readOnly={!disableSend}
                  onClick={() => {
                    handleDisable();
                  }}
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
                  className="form-control"
                  placeholder="0123456789"
                  name="housephoneno"
                  value={applicationForm.housephoneno}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  readOnly={!disableSend}
                  onClick={() => {
                    handleDisable();
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Email</label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  name="email"
                  value={applicationForm.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  readOnly={!disableSend}
                  onClick={() => {
                    handleDisable();
                  }}
                />
              </div>
            </div>

            <div className="row">
              <label className="col-sm-3 col-form-label">Nationality</label>
              <div className="col-sm-9">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button nationality"
                    name="nationality"
                    placeholder="Type here"
                    value={applicationForm.nationality}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    readOnly={!disableSend}
                    onClick={() => {
                      handleDisable();
                    }}
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    disabled={!disableSend}
                  >
                    Select
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    {raceList.map((race, key) => {
                      return (
                        <a
                          key={race + key}
                          className="dropdown-item"
                          name="nationality"
                          onClick={(e) => {
                            e.target.value = e.target.innerText;
                            handleChange(e);
                          }}
                        >
                          {race}
                        </a>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <label className="col-sm-3 col-form-label">Religion</label>
              <div className="col-sm-9">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button religion"
                    name="religion"
                    placeholder="Type here"
                    value={applicationForm.religion}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    readOnly={!disableSend}
                    onClick={() => {
                      handleDisable();
                    }}
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    disabled={!disableSend}
                  >
                    Select
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    {religionList.map((religion, key) => {
                      return (
                        <a
                          key={religion + key}
                          className="dropdown-item"
                          name="religion"
                          onClick={(e) => {
                            e.target.value = e.target.innerText;
                            handleChange(e);
                          }}
                        >
                          {religion}
                        </a>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Sex</label>
              <div className="col-sm-9">
                <select
                  className="form-select mb-3 flex-shrink-1"
                  aria-label="input option gender"
                  name="sex"
                  value={applicationForm.sex}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value={0}>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 d-flex">
                <div className="ms-auto form-check">
                  <p className="container-fluid fw-bolder">AGREEMENT:</p>
                  <input
                    className="form-check-input p-2 border border-primary"
                    type="checkbox"
                    id="gridCheck3-a"
                    checked={applicationForm.consent}
                    onClick={() => {
                      // do form checking before approving singature
                      let verified = verifyApplication();

                      if (verified) {
                        $("#signpadButton").click();
                      }
                    }}
                    onChange={() => {}}
                  />
                  <label className="form-check-label">
                    I hearby approve that the information I gave in this form is
                    correct and I agree that if somehow the information I gave
                    is fake, KPTM/KUPTM Kuala Lumpur can legally reject my
                    application, and revert back any offer or terminate my study
                    in Kolej Poly-Tech Mara/ Kolej Universiti Poly-Tech MARA
                    (KUPTM) Kuala Lumpur at any given time
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="ms-md-auto col-md-6 text-center text-md-end">
                {isApplying ? (
                  <button
                    className="btn btn-primary ms-1"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span>PROCESSING</span>
                  </button>
                ) : (
                  <button className="btn btn-primary" disabled={disableSend}>
                    APPLY
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <SignPad></SignPad>
    </div>
  );
};

export default FormApplicationInformation;
