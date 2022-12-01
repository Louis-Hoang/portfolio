import "../assets/scss/SocialMedia.scss";
import resume from "../assets/images/result.svg";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import envelope from "../assets/images/envelope.svg";

function SocialMedia() {
    return (
        <div className="sidebar">
            <div className="social-medias">
                <div className="socialmedia">
                    <a
                        className="icon"
                        href="https://drive.google.com/file/d/152k0ymtBVSRZNueR8OeBihlTfXe2qWNO/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={resume} alt="resume" />
                    </a>
                </div>
                <div className="socialmedia">
                    <a
                        className="icon"
                        href="https://github.com/Louis-Hoang"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github} alt="github" />
                    </a>
                </div>
                <div className="socialmedia">
                    <a
                        className="icon"
                        href="https://www.linkedin.com/in/hoang-xtung/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
                <div className="socialmedia">
                    <a
                        className="icon"
                        href="mailto:tung.xuan.h@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={envelope} alt="email" />
                    </a>
                </div>
                <div className="vertical-line"></div>
            </div>
        </div>
    );
}

export default SocialMedia;
