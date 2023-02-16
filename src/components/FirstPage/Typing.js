import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Typing = () => {

  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Computer Science @ Carleton University", "Incoming Intern Developer @ Kinaxis", "2x MLH Hackathon Winner"],
      typeSpeed: 40,
      showCursor: false,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

export default Typing;