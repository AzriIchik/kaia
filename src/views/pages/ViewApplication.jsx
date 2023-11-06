import { useEffect } from "react";
import ApplicationDetailViewer from "../components/ApplicationDetailViewer/ApplicationDetailViewer";

const ViewApplication = () => {
    // Staff ID Later for Management
    useEffect(() => {
        var url_string = window.location;
        var url = new URL(url_string);
        var staffID = url.searchParams.get("ID");
        localStorage.setItem("STAFFID", staffID);
    }, []);

    return <ApplicationDetailViewer></ApplicationDetailViewer>;
};

export default ViewApplication;
