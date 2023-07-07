import React from "react";

function TryText({ title, color, text }) {
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ color: color }}>{title}</h1>
        <p style={{ color: color }}>
          Text result : <span id="asd">{text}</span>
        </p>
      </div>
    </div>
  );
}

export default TryText;
