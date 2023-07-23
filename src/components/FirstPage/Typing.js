import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Typing = () => {

  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Intern Developer @ Kinaxis", "Computer Science Student @ Carleton University"],
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