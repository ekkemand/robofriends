import React from "react";

const Scroll = (props) => {
    return (
        <div className="content" style={{ overflowY: "scroll", border: "1px solid black" }}>
            {props.children}
        </div>
    );
};

export default Scroll;
