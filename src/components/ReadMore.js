import "..//assets/scss/ReadMore.scss";

import React, { useState } from "react";

const ReadMore = ({ children }) => {
    // const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="text">
            {isReadMore ? children[0] : children}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "READ MORE..." : "...READ LESS"}
            </span>
        </div>
    );
};

export default ReadMore;
