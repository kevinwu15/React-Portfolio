import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import styled from 'styled-components';

const Typing = () => {
  const TypedWords = styled.span`
    color: white;
  `

  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Carleton University", "Computer Science"],
      typeSpeed: 40,
      showCursor: false,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <TypedWords ref={typeTarget} />;
};

export default Typing;