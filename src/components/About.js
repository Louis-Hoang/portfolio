import "../assets/scss/About.scss";
import FadeInSection from "./FadeInSection";
import portrait from "../assets/images/portrait.jpg";
import portrait_round from "../assets/images/portrait_round.png";
// import ReactReadMoreReadLess from "react-read-more-read-less";
import ReadMore from "./ReadMore";
function About() {
    const resumeRedirect = () => {
        window.open(
            "https://docs.google.com/document/d/1Jj_I-0gPqMc68XMEm69e7VLwAasqO2s8WG1Af4ED9jo/edit?usp=sharing",
            "_blank"
        );
    };
    return (
        <div className="about">
            <div className="container-info">
                <FadeInSection>
                    <div className="profile-container">
                        <div className="left-content">
                            <img src={portrait} alt="avatar" />
                        </div>
                        <div className="right-content">
                            <h2 className="subtitle">My intro</h2>
                            <h1 className="aboutMe">About me</h1>
                            <hr />
                            <div className="person-pic-phone">
                                <img src={portrait_round} alt="avatar" />
                            </div>
                            <ReadMore>
                                <div className="personal-intro">
                                    <span className="wave">👋 </span>
                                    Hi, I'm Tung, but you can call me Louis. I'm
                                    a senior at Denion University I'm pursuing a
                                    BS degree in computer science and
                                    mathematics with an expected graduation in
                                    2024. What I'm most passionate about are
                                    cultivating technical solutions to
                                    real-world problems, advocating
                                    sustainability to support my surrounding
                                    communities.
                                </div>
                                <div className="personal-intro">
                                    <span className="growth">🎯 </span>I
                                    appreciate every challenge I came across
                                    that helped building my self-efficacy in
                                    this ever-changing world. Through previous
                                    internships at innovative tech companies, I
                                    learned the importance of embracing new
                                    changes, whether they be adaptations to new
                                    working paradigm, programming languages, or
                                    attitudes. I am thrilled when I am given the
                                    chance to discover ways to improve
                                    flexibility and creativity through ongoing
                                    discussions with others to address
                                    customers' changing needs.
                                </div>
                                <div className="personal-intro">
                                    <span className="community">🙌 </span>
                                    What inspires me to push myself forward
                                    everyday is knowing that I have another
                                    chance to make a difference and better
                                    people's day through good deeds. I thrive in
                                    jobs that foster diversity and culture,
                                    enjoying collaborations with people from
                                    different backgrounds for a mutual goal. Not
                                    only do I see it as a chance to gain new
                                    experience, but also to deeply connect with
                                    others through their different perspectives.
                                    I strive to be a team player, be in tune
                                    with the emotional needs of those around me.
                                </div>
                                <div className="personal-intro">
                                    <span className="skill">🔧 </span>
                                    Competencies: JavaScript/Typescript (React),
                                    Go, Python, C++, MongoDB, AWS, Docker &nbsp;
                                </div>
                            </ReadMore>
                            <div className="profile-box">
                                <div className="profile-column col-mobi">
                                    <h3>
                                        <b>Full Name: </b>
                                        Tung Hoang
                                    </h3>
                                    <h3>
                                        <b>Origin: </b>
                                        Ho Chi Minh, VietNam
                                    </h3>
                                    <h3>
                                        <b>Language: </b>
                                        English, Vietnammese
                                    </h3>
                                </div>
                                <div className="profile-column col-mobi">
                                    <h3>
                                        <b>University: </b>
                                        Denison University
                                    </h3>
                                    <h3>
                                        <b>Major: </b>
                                        Computer Science & Mathematics
                                    </h3>
                                    <h3>
                                        <b>Expected Graduation: </b>
                                        May, 2024
                                    </h3>
                                </div>
                            </div>
                            <button
                                className="banner-button"
                                type="button"
                                onClick={resumeRedirect}
                            >
                                My Resume
                                <span className="arrow-icon"></span>
                            </button>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
}

export default About;
