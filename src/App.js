import React from "react";
import "./App.css";
//Import Components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";

// What is a props(Property)? Props is kind of className of id, but we can use props like `DATA!`
// Props is basically it's a way you can pass data between components
// ONE Important thing is that direction. you can pass props only in one direction. Pass them down compoenent.
function App() {
  //Write JavaScriopt here


  return (
    <div className="App">
      <h1>Hello React </h1>
      <div className="home">
        <Nav />
        <Tweets />
      </div>
    </div>
  );
}

export default App;
