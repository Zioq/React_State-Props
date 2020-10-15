import React from "react";
//Import Component
import Tweet from "./Tweet";
const Tweets = (props) => {
  const tweets = [
    { name: "Robert", 
      tweet: "So tired study of React. I need a coffee" },
    {
      name: "traversy media",
      tweet: "Im out taking a break",
    },
    {
      name: "websimplified",
      tweet: "Hello guys are you okay?",
    },
  ];
  return (
      <section>
        {tweets.map(tweet =>(
            <Tweet name={tweet.name} tweet={tweet.tweet}/>
        ))}
      </section>
  )
};

export default Tweets;
