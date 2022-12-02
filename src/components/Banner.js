import "../assets/scss/Banner.scss";
import avatar from "../assets/images/avatar.svg";
import ScrollIntoView from "react-scroll-into-view";
function Banner(props) {
    return (
        <div className="banner">
            <div className="inner">
                <h1 className="greeting">Hi, I'm Tung </h1>
                {/* <h1 className="">Tung Hoang</h1> */}
                <div className="intro">
                    Welcome to my website, where I share both of my professional
                    journey <br /> and my personal interests.
                </div>
                {/* <div className="button-container">
                    <button className="banner-button" type="button">
                        <div className="button-text">Discover</div>
                        <span className="arrow-icon"></span>
                    </button>
                </div> */}
            </div>
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="cta">Scroll</div>
            <ScrollIntoView selector=".about">
                <div className="mouse_scroll">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div className="arrow">
                        <span className="m_scroll_arrows unu"></span>
                        <span className="m_scroll_arrows doi"></span>
                        <span className="m_scroll_arrows trei"></span>
                    </div>
                </div>
            </ScrollIntoView>
        </div>
    );
}

export default Banner;
