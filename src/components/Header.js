import "../assets/scss/Header.scss";
import logo from "../assets/images/personal-logo.svg";
import ScrollIntoView from "react-scroll-into-view";

function Header() {
    const resumeRedirect = () => {
        window.open(
            "https://drive.google.com/file/d/152k0ymtBVSRZNueR8OeBihlTfXe2qWNO/view?usp=sharing",
            "_blank"
        );
    };
    const selfRedirect = () => {
        window.open(window.location.href, "_self");
    };
    return (
        <div className="header">
            <nav className="navbar">
                <div className="logo-container" onClick={selfRedirect}>
                    <span className="navbar-brand">
                        <img src={logo} alt="Tung Hoang logo" />
                    </span>
                </div>
                <div className="navbar-buttons">
                    <ScrollIntoView selector=".about">
                        <div className="navbar-button">About</div>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".work">
                        <div className="navbar-button">Work</div>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".gallery">
                        <div className="navbar-button">Gallery</div>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".contact">
                        <div className="navbar-button">Contact</div>
                    </ScrollIntoView>
                    <div
                        className="navbar-button resume-button"
                        onClick={resumeRedirect}
                    >
                        Resume
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
