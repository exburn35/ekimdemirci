"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Sadece istemci tarafında çalışsın
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1, // Magic UI tarzı karanlık küre
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.2], // Koyu arka planla uyumlu zemin
      markerColor: [0.6, 0.2, 0.9], // Mor/Pembe Magic UI vurguları
      glowColor: [0.2, 0.1, 0.6], // Dış parlama
      markers: [
        // Sadece örnek markerlar, dinamik veriyle de doldurulabilir (ör: Dünya çapındaki projeler)
        { location: [41.0082, 28.9784], size: 0.08 }, // İstanbul
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [40.7128, -74.0060], size: 0.1 }, // NY
        { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
      ],
      onRender: (state) => {
        // Otomatik dönüş animasyonu
        state.phi = phi;
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [windowWidth]);

  return (
    <div className="absolute inset-0 max-w-full overflow-hidden flex items-center justify-center opacity-70 cursor-grab active:cursor-grabbing z-0 mix-blend-screen pointer-events-none">
      <div className="w-full aspect-[1/1] max-w-[800px] mt-32 md:mt-48">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-auto"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
