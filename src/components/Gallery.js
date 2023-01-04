import GalleryItem from "./GalleryItem";
import "../assets/scss/Gallery.scss";
import FadeInSection from "./FadeInSection";
import LittleJapan from "../assets/images/Little_Japan.jpeg";
import Street from "../assets/images/NguyenHue_Street.jpeg";
import Pier from "../assets/images/NavyPier.jpeg";
import Moma from "../assets/images/Moma.jpeg";
import Theatre from "../assets/images/ChicagoTheatre.jpeg";
import Guggenheim from "../assets/images/Guggenheim.jpeg";
import Denison from "../assets/images/Denison.jpeg";
import Airport from "../assets/images/ChangiAirport.jpeg";
import Sunrise from "../assets/images/DenisonSunset.jpeg";
function Gallery() {
    return (
        <div className="gallery">
            <FadeInSection>
                <div className="intro">
                    <h2 className="title">Gallery</h2>
                    <div className="gallery-text">
                        Outside of school and work I like to spend as much time
                        as I can going around finding inspiration, travelling
                        with friends, family or just myself.
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="photo-grid">
                    <div className="col">
                        <GalleryItem
                            img={LittleJapan}
                            alt="Little Japan"
                            desc="Little Japan - Saigon, VietNam"
                        />
                        <GalleryItem
                            img={Pier}
                            alt="Navy Pier"
                            desc="Navy Pier - Chicago, IL"
                        />
                        <GalleryItem
                            img={Theatre}
                            alt="Chiago Theatre"
                            desc="The Chicago Theatre - Chicago, IL"
                        />
                        <GalleryItem
                            img={Guggenheim}
                            alt="Guggenheim Museum"
                            desc="Guggenheim Museum - Chicago, IL"
                        />
                        <GalleryItem
                            img={Denison}
                            alt="Denison University"
                            desc="Landscape - Denison University"
                        />
                        <GalleryItem
                            img={Sunrise}
                            alt="University Sunrise"
                            desc="Sunrise - Denison University"
                        />
                    </div>
                    <div className="col">
                        <GalleryItem
                            img={Street}
                            alt="Nguyen Hue Street"
                            desc="Nguyen Hue Street - Saigon, Vietnam"
                        />
                        <GalleryItem
                            img={Moma}
                            alt="Moma Museum Chicago"
                            desc="Moma Museum - Chicago, IL"
                        />
                        <GalleryItem
                            img={Airport}
                            alt="Changi Airport"
                            desc="Changi Airport - Singapore"
                        />
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}

export default Gallery;
