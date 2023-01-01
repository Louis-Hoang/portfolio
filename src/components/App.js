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
            <Header />
            <Banner />
            <SocialMedia />
            <About />
            <Work />
            <Gallery />
            {/* <hr /> */}
            <Contact />
        </div>
    );
}

export default App;
