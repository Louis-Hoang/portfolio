import "../assets/scss/Gallery.scss";
import FadeInSection from "./FadeInSection";
import LittleJapan from "../assets/images/Little_Japan.jpeg";
import Street from "../assets/images/NguyenHue_Street.jpeg";
import Pier from "../assets/images/NavyPier.jpeg";
import Moma from "../assets/images/Moma.jpeg";
import Theatre from "../assets/images/ChicagoTheatre.jpeg";
import Guggenheim from "../assets/images/Guggenheim.jpeg";
function Gallery() {
    return (
        <div className="gallery">
            <FadeInSection>
                <div className="intro">
                    <h2 className="title">Gallery</h2>
                    <div className="gallery-text">
                        Outside of my work I like to spend as much time as I can
                        going around finding inspiration, travelling with
                        friend, family or just myself.
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="photo-grid">
                    <div className="col">
                        <FadeInSection>
                            <div className="grid_item photo">
                                <div className="photo-container">
                                    <img
                                        className="photo-item"
                                        src={LittleJapan}
                                        alt="Little Japan"
                                    />
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className="grid_item photo">
                                <div className="photo-container">
                                    <img
                                        className="photo-item"
                                        src={Pier}
                                        alt="Navy Pier"
                                    />
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className="grid_item photo">
                                <div className="photo-container">
                                    <img
                                        className="photo-item"
                                        src={Theatre}
                                        alt="Chiago Theatre"
                                    />
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className="grid_item photo">
                                <div className="photo-container">
                                    <img
                                        className="photo-item"
                                        src={Guggenheim}
                                        alt="Chiago Theatre"
                                    />
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                    <div className="col">
                        <FadeInSection>
                            <div className="grid_item photo">
                                <div className="photo-container">
                                    <img
                                        className="photo-item"
                                        src={Street}
                                        alt="Local Street"
                                    />
                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection>
                            <div className="grid_item photo">
                                <div className="photo-container">
                                    <img
                                        className="photo-item"
                                        src={Moma}
                                        alt="Moma"
                                    />
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}

export default Gallery;
