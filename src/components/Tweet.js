import React from "react";

const Tweet = (props) => {
    return(
        <div>
            <h1>User: {props.name}</h1>
            <h1>Message: {props.tweet}</h1>
      </div>
    )

};
export default Tweet;
