import React, { useRef, useEffect } from "react";
import "./CSS/Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      let mouseX = clientX - cursorRef.current.clientWidth / 2;
      let mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return <div className="app_cursor" ref={cursorRef}></div>;
}

export default Cursor;
