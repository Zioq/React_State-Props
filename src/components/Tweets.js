import React from "react";
//Import Component
import Tweet from "./Tweet";
const Tweets = (props) => {
  return (
    <section>
      <Tweet me={props.me} age = {props.age}/>
    </section>
  );
};

export default Tweets;
