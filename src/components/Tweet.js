import React from "react";

const Tweet = (props) => {
    return(
        <div>
        <h1>{props.me}</h1>
        <h2>{props.age}</h2>
      </div>
    )

};
export default Tweet;
