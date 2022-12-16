import React from "react";


function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center", bgcolor: 'rgb(246, 217, 180)', fontFamily: 'Lacquer' }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
