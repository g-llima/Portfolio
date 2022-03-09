import React, { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./CSS/Hero.css";

function getRandomColor() {
  return `
      ${Math.random() * 255},
      ${Math.random() * 255},
      ${Math.random() * 255}
      `;
}

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createCircles();
    });

    const c = canvas.getContext("2d");

    class Circle {
      constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        let color = `rgb(${getRandomColor()})`;

        this.draw = () => {
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, 360, false);
          c.strokeStyle = color;
          c.stroke();
        };

        this.update = () => {
          if (
            this.x + this.radius > window.innerWidth ||
            this.x - this.radius < 0
          ) {
            this.dx = -this.dx;
          }
          if (
            this.y + this.radius > window.innerHeight ||
            this.y - this.radius < 0
          ) {
            this.dy = -this.dy;
          }
          this.y += this.dy;
          this.x += this.dx;

          this.draw();
        };
      }
    }
    let circleArray = [];
    function createCircles() {
      circleArray = [];
      for (let i = 0; i < 100; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var dy = (Math.random() - 0.5) * 1;
        var dx = (Math.random() - 0.5) * 1;
        var radius = 1;

        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }
    createCircles();
    animate();
  }, []);

  return (
    <div className="hero">
      <canvas ref={canvasRef}></canvas>
      <div className="hero__content">
        <h1>GABRIEL LIMA</h1>
        <h2>WEB DEVELOPER</h2>
        <Link to="#about">
          <i className="fal fa-arrow-circle-down"></i>
        </Link>

        <div className="hero__content__links">
          <a href="https://github.com/g-llima" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-lima-462154228/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
