
import Footer from "./footer/Footer";
import Topbar from "./topbar/Topbar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Topbar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout