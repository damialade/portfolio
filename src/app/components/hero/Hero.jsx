"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 100;

    // Initialize stars with additional properties for twinkling
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5, // Make stars a bit larger
        speed: Math.random() * 0.05 + 0.01,
        maxRadius: Math.random() * 1.5 + 0.5, // Maximum radius for twinkling
        opacity: Math.random() * 0.5 + 0.5, // Initial opacity
        opacityChange: Math.random() * 0.02 - 0.01, // Slight change in opacity
      });
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update star position and reset if it moves off-screen
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        // Apply twinkling effect by changing opacity and radius
        star.opacity += star.opacityChange;
        if (star.opacity <= 0.3 || star.opacity >= 0.8) {
          star.opacityChange = -star.opacityChange; // Reverse opacity change to create twinkle
        }

        star.radius += 0.02; // Increase radius slightly for twinkling
        if (star.radius > star.maxRadius || star.radius < 0.5) {
          star.radius = star.maxRadius; // Limit radius to maxRadius
        }

        // Draw the star with a glowing effect
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 157, ${star.opacity})`; // Adjust opacity for twinkle
        ctx.fill();
        ctx.closePath();
      });

      requestAnimationFrame(animateStars);
    }

    animateStars();
  }, []);

  //scroll contact form to view
  const contactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="starfield"></canvas>
      <div className="hero-content">
        <h1>
          Nice to meet you!
          <br />
          <span>I&apos;m</span>
          <span className="hero-span">Damilola Aladeokin.</span>
        </h1>
        <p className="hero-description">
          I&apos;m a front-end engineer based in the UK who is passionate about
          building accessible and responsive web applications that are intuitive
          to users.
        </p>
        <button className="contact-button" onClick={contactClick}>
          Contact Me
        </button>
      </div>
      <div className="image-wrapper">
        <div className="spiral-background">
          <Image
            src="/images/profile.png"
            alt="Damilola Aladeokin"
            className="hero-image"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
