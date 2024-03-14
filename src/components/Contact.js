import "../assets/scss/Contact.scss";
import FadeInSection from "./FadeInSection";
import resume from "../assets/images/result.svg";
import githubWeb from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import envelope from "../assets/images/envelope.svg";

function Contact() {
  const email = () => {
    window.open("mailto:tung.xuan.h@gmail.com", "_blank");
  };
  const github = () => {
    window.open("https://github.com/TungXHoang/portfolio", "_blank");
  };
  return (
    <div className="contact">
      <FadeInSection>
        <h2 className="next-step">What's Next?</h2>
        <h2 className="title">Get In Touch</h2>
        <div className="contact-text">
          with me. I am always more than happy to having insightful
          conversation, ideas, as well as job opportunities.
        </div>
        <div className="container-button" onClick={email}>
          Say Hello
        </div>
        <div className="sidebar-mobi">
          <div className="social-medias">
            <div className="socialmedia">
              <a
                className="icon"
                href="https://drive.google.com/file/d/1ts_HRYOfPs0hPWFPGcgQI_Fu83DmFRaq/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img src={resume} alt="resume" />
              </a>
            </div>
            <div className="socialmedia">
              <a
                className="icon"
                href="https://github.com/TungXHoang"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubWeb} alt="github" />
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
          </div>
        </div>
        <div className="claim" onClick={github}>
          Designed & Built by Tung Hoang
        </div>
      </FadeInSection>
    </div>
  );
}

export default Contact;
