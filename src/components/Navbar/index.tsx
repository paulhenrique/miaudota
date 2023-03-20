import { AppBar, Toolbar, Box, Button } from "@mui/material";

import Logo from "../Logo";
import Container from "../Container";
import { getLink, links } from "../../config/links";

const Navbar = () => {
  return (
    <AppBar color="inherit" position="fixed">
      <Toolbar>
        <Container>
          <Box
            display="flex"
            flex="1"
            justifyContent="space-between"
            alignItems="center"
          >
            <Logo />
            <nav>
              <Box
                component="nav"
                sx={{
                  display: "flex",
                  gap: "24px",
                }}
              >
                <Button
                  color="secondary"
                  component={"a"}
                  href={getLink(links.quemSomos)}
                >
                  Quem somos
                </Button>
                <Button
                  color="secondary"
                  component={"a"}
                  href={getLink(links.informacoesImportantes)}
                >
                  Informações importantes
                </Button>
                <Button
                  color="secondary"
                  component={"a"}
                  href={getLink(links.miaumigos)}
                >
                  Miaumigos
                </Button>
                <Button
                  color="secondary"
                  component={"a"}
                  href={getLink(links.queroAdotar)}
                >
                  Quero adotar!
                </Button>
              </Box>
            </nav>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
