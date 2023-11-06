import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/bootstrap-extended.css";
import "./assets/css/style.css";
import "./assets/css/icons.css";
import "./normalize.css";
import "./index.css";
import "./assets/js/app";
import "./assets/js/index2";
import "animate.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            theme="dark"
        />
    </AppContextProvider>
);


