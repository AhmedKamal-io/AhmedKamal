import React from "react";
import Threads from "./Threads";

const Treads2 = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
        color={[1, 1, 1]}
      />
    </div>
  );
};

export default Treads2;
