import "../assets/scss/App.scss";
import Banner from "./Banner";
import SocialMedia from "./SocialMedia";
import Header from "./Header";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Gallery from "./Gallery";

function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header />
                <Banner />
                <SocialMedia />
                <About />
                <Work />
                <Gallery />
                <Contact />
            </div>
        </div>
    );
}

export default App;
