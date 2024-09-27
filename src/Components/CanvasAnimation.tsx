import "@/CssFile/animation/canvas-animation.css";
import React, { useEffect, useRef } from "react";

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 200; // Increase the number of particles for a denser effect

    // Particle Class Definition
    class Particle {
      x!: number; // Use definite assignment assertion
      y!: number; // Use definite assignment assertion
      angle: number; // Angle for circular motion
      radius: number; // Distance from center
      size: number;
      speed: number; // Speed of rotation
      opacity: number;

      constructor(centerX: number, centerY: number) {
        this.angle = Math.random() * Math.PI * 2; // Random initial angle
        this.radius = Math.random() * 100 + 50; // Random radius from center
        this.size = Math.random() * 15 + 5; // Smoke size
        this.speed = Math.random() * 0.02 + 0.01; // Speed of rotation
        this.opacity = Math.random() * 0.5 + 0.3; // Initial opacity
        this.updatePosition(centerX, centerY); // Initialize position
      }

      updatePosition(centerX: number, centerY: number) {
        // Update position based on circular motion
        this.x = centerX + Math.cos(this.angle) * this.radius; // X position
        this.y = centerY + Math.sin(this.angle) * this.radius; // Y position
      }

      update(centerX: number, centerY: number) {
        this.angle += this.speed; // Increase angle to rotate
        this.updatePosition(centerX, centerY); // Update position

        // Gradually reduce opacity and size
        this.opacity -= 0.005; // Fade out over time
        this.size -= 0.05; // Gradually shrink size

        // Reset particle when opacity is too low
        if (this.opacity <= 0 || this.size <= 0) {
          this.reset(centerX, centerY);
        }
      }

      draw() {
        ctx.fillStyle = `rgba(169, 169, 169, ${this.opacity})`; // Soft gray color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      reset(centerX: number, centerY: number) {
        this.angle = Math.random() * Math.PI * 2; // Reset angle
        this.radius = Math.random() * 100 + 50; // Reset radius
        this.size = Math.random() * 15 + 5; // Random size
        this.speed = Math.random() * 0.02 + 0.01; // Random speed
        this.opacity = Math.random() * 0.5 + 0.3; // Random initial opacity
        this.updatePosition(centerX, centerY); // Initialize position
      }
    }

    // Initialize particles
    function init() {
      const centerX = canvas.width / 2; // Center X position
      const centerY = canvas.height / 2; // Center Y position

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(centerX, centerY)); // Pass center to constructor
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2; // Center X position
      const centerY = canvas.height / 2; // Center Y position

      particlesArray.forEach((particle) => {
        particle.update(centerX, centerY); // Pass center for circular motion
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    // Handle canvas resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Reinitialize particles on resize
    };

    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-animation" />;
};

export default CanvasAnimation;
