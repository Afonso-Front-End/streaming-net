import { Outlet } from "react-router-dom";
// import "./Layout.css"


import Gallery from "../Gallery/Gallery";

const Layout = () => {
    return (
        <div className="container">
            <div className="content">
                {/* <Emphasis /> */}
                <Gallery />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;