import { lazy, Suspense, useEffect, useState } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { useMediaQuery } from "react-responsive";

const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const idle =
      window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    const cancel = window.cancelIdleCallback || clearTimeout;
    const id = idle(() => setShowScene(true), { timeout: 2500 });
    return () => cancel(id);
  }, []);

  return (
    <section
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {showScene && (
          <Suspense fallback={null}>
            <HeroScene isMobile={isMobile} />
          </Suspense>
        )}
      </figure>
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-primary/90 via-primary/70 to-primary/30 md:hidden" />
    </section>
  );
};

export default Hero;
