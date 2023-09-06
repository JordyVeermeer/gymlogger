import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import './appRoot.css';


export default function AppRoot() {

    return (
        <div className="appRoot">
            <Navbar />
            <Outlet />
        </div>
    );
}