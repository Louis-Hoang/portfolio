import "../assets/scss/Contact.scss";
import FadeInSection from "./FadeInSection";

function Contact() {
    const email = () => {
        window.open("mailto:tung.xuan.h@gmail.com", "_blank");
    };
    const github = () => {
        window.open("https://github.com/Louis-Hoang/portfolio", "_blank");
    };
    return (
        <div className="contact">
            <FadeInSection>
                <h2 className="next-step">What's Next?</h2>
                <h2 className="title">Get In Touch</h2>
                <div className="contact-text">
                    Feel free to connnect with me. I am always more than happy
                    to having insightful conversation, ideas, as well as job
                    opportunities.
                </div>
                <div className="container-button" onClick={email}>
                    Say Hello
                </div>
                <div className="claim" onClick={github}>
                    Designed & Built by Tung Hoang
                </div>
            </FadeInSection>
        </div>
    );
}

export default Contact;
