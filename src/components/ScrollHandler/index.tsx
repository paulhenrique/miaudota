import React from "react";
import { links, getLink, titles } from "../../config/links";

const ScrollHandler = () => {
  const handleScroll = () => {
    console.log("scrolling");
    const currentPageScrollOffset = window.pageYOffset;
    // array com a lista de posições dos elementos na página
    const positions = Object.values(links).map((link) => {
      const element = document.getElementById(link);
      if (element) {
        return element.offsetTop;
      }
      return 0;
    });

    // se a posição atual for maior que a posição do elemento, então o título da página será alterado
    for (let i = 0; i < positions.length; i++) {
      if (currentPageScrollOffset > positions[i]) {
        document.title = Object.values(titles)[i] + " | MiauDota";
      }
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    scrollToTop();
  }, []);

  return null;
};

export default ScrollHandler;
