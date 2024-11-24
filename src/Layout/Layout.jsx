import { Outlet } from "react-router-dom";
// import "./Layout.css"


import MediaGallery from "../Gallery/Gallery";

const Layout = () => {
    return (
        <div className="container">
            <div className="content">
                {/* <Emphasis /> */}
                <MediaGallery />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;