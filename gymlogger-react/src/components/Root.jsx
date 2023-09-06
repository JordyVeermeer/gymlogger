import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import './root.css';

export default function Root() {
    return (
        <div className="layout">
            <Outlet />
        </div>
    );
}