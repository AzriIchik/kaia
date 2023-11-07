import { useState, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "jquery-validation/dist/jquery.validate";
import AxiosClient from "../api/axiosClient";
import dateToSQLDatetime from "../helper/dataformat";

let AppContext = createContext();

export let AppContextProvider = ({ children }) => {
  const notify = (message) => toast(message);
  const [user, setUser] = useState({
    id: "",
    name: "",
    position: "",
    department: "",
    isLoggedIn: false,
  });
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    icno: "",
    schoolname: "",
    dob: new Date(),
    address: "",
    mobilephoneno: "",
    housephoneno: "",
    email: "",
    nationality: "",
    religion: "",
    sex: "",
    consent: false,
    sign: "",
    spmresult: [],
  });

  const [applicationProgrammeCampus, setApplicationCourseCampus] = useState([]);
  const [programmeSelected, setProgrammeSelected] = useState([]);
  const [disableSend, setDisableSend] = useState(true);
  const [applicationList, setApplicationList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [gredList, setGredList] = useState([]);
  const [viewApplicationDetails, setViewApplicationDetails] = useState(null);
  const [isApplying, setIsApplying] = useState(false);

  const verifySPMForm = () => {
    let resultForm = document.getElementById("spm-form");
    let result = new FormData(resultForm);
    for (const gred of result.entries()) {
      if (gred[1] === "0") {
        notify("Please properly insert SPM Subject Gred");
        return 0;
      }
    }

    return 1;
  };

  const verifyApplication = () => {
    // Check if subject is properly inserted
    if (!verifySPMForm()) return 0;

    // Check if no programme is selected
    if (programmeSelected.length === 0) {
      notify("Please pick at least 1 Programme");
      return 0;
    }

    // personal information validation
    let personalinfoForm = $("#formPersonalInformation");
    let pForm = new FormData(personalinfoForm[0]);

    let validation = {
      name: {
        isValid: /^(?!$)[A-Za-z\s]*$/.test(pForm.get("name")),
        errorMassage: "Please provide a proper name (no special characters)",
      },
      schoolname: {
        isValid: /^(?!$)[A-Za-z\s]*$/.test(pForm.get("schoolname")),
        errorMassage:
          "Please provide a proper name for school (no special characters)",
      },
      icno: {
        isValid: /^[0-9]+$/.test(pForm.get("icno")),
        errorMassage: "Please provide a proper IC number",
      },
      address: {
        isValid: /.+/.test(pForm.get("address")),
        errorMassage: "Please provide an address",
      },
      mobilephoneno: {
        isValid: /^[0-9]+$/.test(pForm.get("mobilephoneno")),
        errorMassage: "Please provide a valid phone number",
      },
      housephoneno: {
        isValid: /^[0-9]+$/.test(pForm.get("housephoneno")),
        errorMassage: "Please provide a valid phone number",
      },
      email: {
        isValid:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            pForm.get("email")
          ),
        errorMassage: "Please provide a proper email)",
      },
      nationality: {
        isValid: /^(?!$)[A-Za-z\s]*$/.test(pForm.get("nationality")),
        errorMassage: "Please provide a nationality",
      },
      religion: {
        isValid: /^(?!$)[A-Za-z\s]*$/.test(pForm.get("religion")),
        errorMassage: "Please provide a religion",
      },
      sex: {
        isValid: /^[a-zA-Z]+$/.test(pForm.get("sex")),
        errorMassage: "Please provide gender",
      },
    };

    //embed error massage
    let hasError = false;

    for (let data in validation) {
      if (!validation[data].isValid) {
        notify(validation[data].errorMassage);
        hasError = true;
      }
    }

    if (hasError) return 0;

    return 1;
  };

  const sendApplication = () => {
    let applicationData = new FormData();

    for (const key in applicationForm) {
      if (key === "dob") continue;
      applicationData.append(key, applicationForm[key]);
    }

    // foramt date to sql
    applicationData.append("dob", dateToSQLDatetime(applicationForm["dob"]));

    applicationData.append("programme", JSON.stringify(programmeSelected));

    if (localStorage.getItem("STAFFID"))
      applicationData.append("staffid", localStorage.getItem("STAFFID"));
    else
      applicationData.append("staffid", import.meta.env.VITE_DEFAULT_STAFF_ID);

    setIsApplying(true);

    AxiosClient.post("/application", applicationData)
      .then(({ data }) => {
        viewApplication(data.application_id);
        setIsApplying(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          notify(err.message + " Try again later");
          setIsApplying(false);
        }
      });
    //later do server verification
  };

  const viewApplication = (id) => {
    AxiosClient.get(`/application/${id}`)
      .then(({ data }) => setViewApplicationDetails(data))
      .catch((err) => {
        notify(err.message);
      });
  };

  const checkLogin = () => {
    if (user.isLoggedIn) return 1;
    else return 0;
  };

  const autoLogin = () => {
    let loginToken = sessionStorage.getItem("LOGINTOKEN");
  };

  return (
    <AppContext.Provider
      value={{
        notify,
        user,
        setUser,
        applicationProgrammeCampus,
        setApplicationCourseCampus,
        programmeSelected,
        setProgrammeSelected,
        applicationForm,
        setApplicationForm,
        verifyApplication,
        sendApplication,
        disableSend,
        setDisableSend,
        verifySPMForm,
        checkLogin,
        applicationList,
        setApplicationList,
        subjectList,
        setSubjectList,
        gredList,
        setGredList,
        viewApplicationDetails,
        setViewApplicationDetails,
        viewApplication,
        isApplying,
        setIsApplying,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
