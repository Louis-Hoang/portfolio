import "../assets/scss/Header.scss";
import logo from "../assets/images/personal-logo.svg";
import ScrollIntoView from "react-scroll-into-view";
import React, { useState, useEffect } from "react";

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10) &&
                window.pageYOffset > 700 //fix this val if needed
            ) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    return scrollDirection;
}

function Header() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);
    const resumeRedirect = () => {
        window.open(
            "https://drive.google.com/file/d/1ts_HRYOfPs0hPWFPGcgQI_Fu83DmFRaq/view?usp=sharing",
            "_blank"
        );
    };
    const selfRedirect = () => {
        window.open(window.location.href, "_self");
    };
    const scrollDirection = useScrollDirection();
    return (
        <div className="header">
            <nav
                className={`navbar ${scroll ? "sticky" : "default"} ${
                    scrollDirection === "down" ? "hidden" : "default"
                }`}
            >
                <div className="logo-container" onClick={selfRedirect}>
                    <span className="navbar-brand">
                        <img
                            src={logo}
                            alt="Tung Hoang logo"
                            className={scroll ? "sticky-logo" : "default"}
                        />
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
