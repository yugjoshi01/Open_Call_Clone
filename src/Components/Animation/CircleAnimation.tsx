// components/AnimatedCircle.tsx
import { useEffect, useRef } from "react";

const AnimatedCircle = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const duration = 2000; // Duration of animation

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Ensure context is valid

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;

    let startTime: number;

    const drawShape = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      // Clear the entire canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate the animated radius based on time
      const t = (elapsed % duration) / duration;
      const animatedRadius = radius + 10 * Math.sin(t * Math.PI * 2); // Pulsating effect

      // Draw the animated circle
      ctx.fillStyle = "rgba(144, 238, 144, 1)"; // Solid green
      ctx.beginPath();
      ctx.arc(centerX, centerY, animatedRadius, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(drawShape);
    };

    requestAnimationFrame(drawShape);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{
        border: "none",
        backgroundColor: "transparent",
        position: "absolute",
        marginLeft: "110px",
      }} // No background and positioned absolutely
    />
  );
};

export default AnimatedCircle;
