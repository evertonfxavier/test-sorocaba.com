import React, { useEffect, useState } from "react";

import { BottonWrapper, CardWrapper, ArrowWrapper } from "./styles";

const BottonUp = () => {
  const [scroll, setScroll] = useState(0);

  const ClickToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setScroll(window.scrollY);
      } else {
        setScroll(0);
      }
    });
  }, [scroll]);

  return (
    <BottonWrapper>
      <CardWrapper scroll={scroll} onClick={ClickToTop}>
        <ArrowWrapper />
      </CardWrapper>
    </BottonWrapper>
  );
};

export default BottonUp;
