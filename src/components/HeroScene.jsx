import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { Suspense } from "react";
import { Astronaut } from "./Astronaut";
import Loader from "./Loader";

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

const HeroScene = ({ isMobile = false }) => {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 1, 3] }}>
      <Suspense fallback={<Loader />}>
        <Float>
          <Astronaut
            scale={isMobile ? 0.24 : 0.3}
            position={isMobile ? [0, -2.1, 0] : [1.3, -1, 0]}
          />
        </Float>
        <Rig />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
