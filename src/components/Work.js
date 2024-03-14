import "../assets/scss/Work.scss";
import Carousel from "react-bootstrap/Carousel";
import expenses1 from "../assets/images/expenses_1_resize.png";
import expenses2 from "../assets/images/expenses_2_resize.png";
import expenses3 from "../assets/images/expenses_3_resize.png";
import sudoku1 from "../assets/images/sudoku_1.png";
import sudoku2 from "../assets/images/sudoku_2.png";
import sudoku3 from "../assets/images/sudoku_3.png";
import kat1 from "../assets/images/kat_1.png";
import kat2 from "../assets/images/kat_2.png";
import kat3 from "../assets/images/kat_3.png";
import chat1 from "../assets/images/chatApp_1.png";
import chat2 from "../assets/images/chatApp_2.png";
import chat3 from "../assets/images/chatApp_3.png";
import FadeInSection from "./FadeInSection";

function Work() {
  const chatRedirect = () => {
    window.open("https://github.com/TungXHoang/chat-app", "_blank");
  };
  const sudokuRedirect = () => {
    window.open("https://github.com/TungXHoang/GUI-Sudoku-Solver", "_blank");
  };
  const ExpenseRedirect = () => {
    window.open(
      "https://github.com/TungXHoang/react-expense-tracking",
      "_blank"
    );
  };
  return (
    <div className="work">
      <FadeInSection>
        <h1 className="work-title">Some Projects I've built</h1>
        <div className="vertical-line">|</div>
      </FadeInSection>
      <FadeInSection>
        <div className="row">
          <Carousel>
            <Carousel.Item interval={5000} onClick={chatRedirect}>
              <img className="d-block w-100" src={chat1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000} onClick={chatRedirect}>
              <img className="d-block w-100" src={chat2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000} onClick={chatRedirect}>
              <img className="d-block w-100" src={chat3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <div className="proj-description right">
            <h2 className="category right">Web App Project</h2>
            <h2 className="name right">Chat Application</h2>
            <div className="details right">
              Chat app application made by Python framework, Flask and
              JavaScript with SocketIO and PostgreSQL database to store users'
              registration information that are styled with HTML/SASS and hosted
              by Heroku.
            </div>
            <div className="tech right">
              <div className="tech-individual one">Flask</div>
              <div className="tech-individual two">SocketIO</div>
              <div className="tech-individual three">PostgreSQL</div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="row center-row">
          <div className="proj-description left">
            <h2 className="category left">Web Design Project</h2>
            <h2 className="name right">Expense Tracker</h2>
            <div className="details left">
              A web application that is enabled by React, HTML/CSS that act as a
              web tracker that have a filter, sorting function and a bar chart
              to help users visualize their expense rate.
            </div>
            <div className="tech left">
              <div className="tech-individual one">React</div>
              <div className="tech-individual two">TypeScript</div>
              <div className="tech-individual three">Javascript</div>
            </div>
          </div>
          <Carousel className="right-carousel">
            <Carousel.Item interval={5000} onClick={ExpenseRedirect}>
              <img
                className="d-block w-100"
                src={expenses1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000} onClick={ExpenseRedirect}>
              <img
                className="d-block w-100"
                src={expenses2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000} onClick={ExpenseRedirect}>
              <img
                className="d-block w-100"
                src={expenses3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="row">
          <Carousel>
            <Carousel.Item interval={5000} onClick={sudokuRedirect}>
              <img className="d-block w-100" src={sudoku1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000} onClick={sudokuRedirect}>
              <img className="d-block w-100" src={sudoku2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000} onClick={sudokuRedirect}>
              <img className="d-block w-100" src={sudoku3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <div className="proj-description right">
            <h2 className="category right">Personal Project</h2>
            <h2 className="name right">Sudoku</h2>
            <div className="details right">
              Utilizing Python and Pygame module to build a structured GUI for a
              classic sudoku with an auto-solved system, which progress can be
              visualized , created by implementing a backtracking algorithm.
            </div>
            <div className="tech right">
              <div className="tech-individual one">Python</div>
              <div className="tech-individual two">Pygame</div>
              {/* <div className="tech-individual three">
                                Javascript
                            </div> */}
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
export default Work;
