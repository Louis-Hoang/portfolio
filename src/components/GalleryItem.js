import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import "../assets/scss/GalleryItem.scss";
function GalleryItem(props) {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };
    return (
        <FadeInSection>
            <div className="grid_item photo">
                <div
                    className="photo-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className="photo-item"
                        src={props.img}
                        alt={props.alt}
                    />
                </div>
                <div
                    className="desc"
                    style={{
                        opacity: hover ? 1 : 0,
                    }}
                >
                    {props.desc}
                </div>
            </div>
        </FadeInSection>
    );
}

export default GalleryItem;
