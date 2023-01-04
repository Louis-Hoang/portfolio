import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import "../assets/scss/PreLoader.scss";
import * as location from "../assets/images/hourglass.json";
import Banner from "./Banner";
import SocialMedia from "./SocialMedia";
import Header from "./Header";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Gallery from "./Gallery";
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
function PreLoader() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);
    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                    setloading(true);

                    setTimeout(() => {
                        setcompleted(true);
                    }, 1000);
                });
        }, 2000);
    }, []);
    return (
        <>
            {!completed ? (
                <Lottie options={defaultOptions} height={300} width={300} />
            ) : (
                <div className="content">
                    <Header />
                    <Banner />
                    <SocialMedia />
                    <About />
                    <Work />
                    <Gallery />
                    <Contact />
                </div>
            )}
        </>
    );
}

export default PreLoader;
