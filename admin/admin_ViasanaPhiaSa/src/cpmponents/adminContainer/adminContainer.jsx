import "./adminContainer.css"
import { useState } from "react"

import DashBoard from "./dashboardTap/Dashboard"
import UserTap from "./userTap/UserTap"
import DataTap from "./dataTap/DataTap"
import EventTap from "./eventsTap/EventTap"
import UserContribute from "./usersContribute/UserContribute"


const AdminContainer =() =>{
    const [activeTap, setActiveTap] = useState(0);

    function handleActiveTap(id){
        setActiveTap(a=>a=id)
        console.log(activeTap)
    }



    return (
        <div className="admincontainer">
            <div className="controler">
                <div className="title">
                    Viasana Phiasa
                </div>
                <div className="taps">
                    <div className="tap tap-dashboard" style={(activeTap==0)?{backgroundColor: "#26A2EF"}:{backgroundColor: "unset"}} onClick={() => handleActiveTap(0)}>Dashboard</div>
                    <div className="tap tap-User" style={(activeTap==1)?{backgroundColor: "#26A2EF"}:{backgroundColor: "unset"}} onClick={() => handleActiveTap(1)}>User</div>
                    <div className="tap tap-Data" style={(activeTap==2)?{backgroundColor: "#26A2EF"}:{backgroundColor: "unset"}} onClick={() => handleActiveTap(2)}>Data</div>
                    <div className="tap tap-contribute" style={(activeTap==3)?{backgroundColor: "#26A2EF"}:{backgroundColor: "unset"}} onClick={() => handleActiveTap(3)}>User contribute</div>
                    <div className="tap tap-Event" style={(activeTap==4)?{backgroundColor: "#26A2EF"}:{backgroundColor: "unset"}} onClick={() => handleActiveTap(4)}>Event</div>
                </div>
            </div>
            <div className="content">
                {
                    activeTap==0&& <DashBoard/>
                }
                {
                    activeTap==1&& <UserTap/>
                }
                {
                    activeTap==2&& <DataTap/>
                }
                {
                    activeTap==3&& <UserContribute/>
                }
                {
                    activeTap==4&& <EventTap/>
                }
            </div>
        </div>
    )
}

export default AdminContainer