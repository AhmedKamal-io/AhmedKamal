import React from "react";
import DotGrid from "./DotGrid";
const DotGrid2 = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        speedTrigger={80}
        shockRadius={200}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
};

export default DotGrid2;
