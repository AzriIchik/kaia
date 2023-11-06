import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import AppContext from "../../context/AppContext";


const AdminLayout = () => {

    let {checkLogin} = useContext(AppContext);

    useState(()=>{

        //check if login
        checkLogin()

    },[])

    return (
        <div className="wrapper">
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;
