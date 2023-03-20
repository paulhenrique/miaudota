import { Box, Button, Typography } from "@mui/material";
import PawIcon from "../../assets/icons/paw.svg";
import Container from "../Container";
import { StyledHeader } from "./StyledHeader";
import { BackgroundPositioner } from "./BackgroundPositioner";
import { getLink, links } from "../../config/links";

const Header = () => {
  return (
    <header>
      <BackgroundPositioner id={links.home}>
        <Container>
          <StyledHeader tabIndex={0}>
            <Typography className="headerText" variant="h1">
              adote um <br /> amigo <span className="right"> de bigodes!</span>
            </Typography>
            <Typography variant="h3" className="subtitle">
              Você pode fazer a diferença na vida de um felino. Dê uma chance
              para o amor, dê uma chance a um gatinho!
            </Typography>
            <Box>
              <Button
                startIcon={
                  <img src={PawIcon} role="presentation" alt="Ícone de pata" />
                }
                component={"a"}
                href={getLink(links.queroAdotar)}
                variant="contained"
                aria-label="Botão que direciona para o conteúdo sobre adoção e formulário de adoção"
              >
                Quero adotar!
              </Button>
            </Box>
          </StyledHeader>
        </Container>
      </BackgroundPositioner>
    </header>
  );
};

export default Header;
