import React from "react";
import { links, getLink, titles } from "../../config/links";
import { Helmet } from "react-helmet";

const ScrollHandler = () => {
  const [title, setTitle] = React.useState("");

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
        // document.title = Object.values(titles)[i] + " | MiauDota";
        setTitle(Object.values(titles)[i] + " | MiauDota");
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default ScrollHandler;
