import "../assets/scss/Work.scss";
import Carousel from "react-bootstrap/Carousel";
import expenses1 from "../assets/images/expenses_1_resize.png";
import expenses2 from "../assets/images/expenses_2_resize.png";
import expenses3 from "../assets/images/expenses_3_resize.png";
import sudoku1 from "../assets/images/sudoku_1.png";
import sudoku2 from "../assets/images/sudoku_2.png";
import sudoku3 from "../assets/images/sudoku_3.png";
import FadeInSection from "./FadeInSection";

function Work() {
    return (
        <FadeInSection>
            <div className="work">
                <div className="row">
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={expenses1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={expenses2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={expenses3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="proj-description right">
                        <h2 className="category right">Web Design Project</h2>
                        <h2 className="name right">Expense Tracker</h2>
                        <div className="details right">
                            A web application that is enabled by React, HTML/CSS
                            that act as a web tracker that have a filter,
                            sorting function and a bar chart to help users
                            visualize their expense rate.
                        </div>
                        <div className="tech right">
                            <div className="tech-individual one">React</div>
                            <div className="tech-individual two">
                                TypeScript
                            </div>
                            <div className="tech-individual three">
                                Javascript
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="proj-description left">
                        <h2 className="category left">Personal Project</h2>
                        <h2 className="name left">Expense Tracker</h2>
                        <div className="details left">
                            Utilizing Python and Pygame module to build a
                            structured GUI for a classic sudoku with an
                            auto-solved system, which progress can be visualized
                            , created by implementing a backtracking algorithm.
                        </div>
                        <div className="tech left">
                            <div className="tech-individual one">Python</div>
                            <div className="tech-individual two">Pygame</div>
                            {/* <div className="tech-individual three">
                                Javascript
                            </div> */}
                        </div>
                    </div>
                    <Carousel className="right-carousel">
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={sudoku1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={sudoku2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={sudoku3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </FadeInSection>
    );
}
export default Work;
