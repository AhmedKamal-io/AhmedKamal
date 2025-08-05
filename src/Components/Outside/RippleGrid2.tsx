import RippleGrid from "../Outside/RippleGrid";

const page = () => {
  return (
    <div>
      <div className="absolute inset-0 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#4e26aa"
          rippleIntensity={0.015}
          gridSize={9}
          gridThickness={30}
          fadeDistance={1}
          glowIntensity={8}
          mouseInteraction={true}
          mouseInteractionRadius={3.5}
          opacity={0.8}
          vignetteStrength={6}
          gridRotation={65}
        />
      </div>
    </div>
  );
};

export default page;
