import "../assets/scss/About.scss";
import FadeInSection from "./FadeInSection";
import portrait from "../assets/images/portrait.jpg";
// import ReactReadMoreReadLess from "react-read-more-read-less";
import ReadMore from "./ReadMore";
function About() {
    const resumeRedirect = () => {
        window.open(
            "https://drive.google.com/file/d/152k0ymtBVSRZNueR8OeBihlTfXe2qWNO/view?usp=sharing",
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
                            <ReadMore>
                                <div className="personal-intro">
                                    <span className="wave">👋 </span>
                                    Hi, I'm Tung, but also go by Louis. I'm a
                                    junior at Denion University I'm pursuing a
                                    BS degree in computer science and
                                    mathematics with an expected graduation in
                                    2024. What I'm most passionate about are
                                    cultivating technical solutions to
                                    real-world problems, advocating
                                    sustainability, and building
                                    community-driven applications.
                                </div>
                                <div className="personal-intro">
                                    <span className="growth">🎯 </span>I
                                    appreciate every challenge I came across
                                    that helped cultivate my self-efficacy in
                                    this risk-taking world. Through internships
                                    at innovative tech companies, I learned the
                                    importance of staying open-minded to
                                    changes, whether they be adaptations to new
                                    project alignments, programming languages,
                                    or attitudes. I feel highly motivated as I
                                    discover ways to improve flexibility and
                                    creativity through ongoing discussions with
                                    others to address a customer’s changing
                                    needs.
                                </div>
                                <div className="personal-intro">
                                    <span className="free-time">👟 </span>I love
                                    to organize my room on a regular basis. Such
                                    habit transfers to my every aspect of life.
                                    I always try to start the day with a
                                    goal-oriented mindset and bring my organized
                                    characteristics to the work I do for maximum
                                    productivity. Rather than following rigid
                                    approaches, I prefer to strive to expand my
                                    comfort zone and adopt unconventional
                                    methods to build sustainable solutions.
                                </div>
                                <div className="personal-intro">
                                    <span className="community">🙌 </span>
                                    What compels me to wake up for work and
                                    become fully charged for the day is knowing
                                    I have another chance to bring warmth and
                                    friendship to my community. I thrive in jobs
                                    that foster diversity and culture, enjoying
                                    collaborations with people from different
                                    walks of life for a shared mission. Not only
                                    do I see it as a chance to accumulate new
                                    knowledge, but also to deeply connect with
                                    others through their different views at
                                    problems. I aim to be a team player, be in
                                    tune with the emotional needs of those
                                    around me, and thrive on positive
                                    reinforcement.
                                </div>
                                <div className="personal-intro">
                                    <span className="skill">🔧 </span>
                                    Competencies: Python/C++, full-stack web
                                    development, MERN stack, UI/UX designs.
                                    &nbsp;
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
                            <div className="button-container">
                                <button className="banner-button" type="button">
                                    <div
                                        className="button-text"
                                        onClick={resumeRedirect}
                                    >
                                        Download CV
                                    </div>
                                    <span className="arrow-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
}

export default About;
