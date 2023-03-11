import React from "react";
import StarfieldAnimation from "react-starfield-animation";
import bg from "./img/bg.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />

      <h1 className="animate-charcter">Coming soon...</h1>
    </div>
  );
}

export default App;
