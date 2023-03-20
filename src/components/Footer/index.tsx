import { Grid, Link, Typography } from "@mui/material";
import { DarkThemeProvider, colors } from "../../theme/ThemeProvider";
import Container from "../Container";
import { StyledFooter } from "./StyledFooter";
import { links } from "../../config/links";
import { Form } from "./Form";

export const Footer = () => {
  return (
    <StyledFooter id={links.queroAdotar} tabIndex={0}>
      <Container>
        <Grid container>
          <Grid item sm={12} lg={6}>
            <div className="containerText">
              <Typography
                variant="h2"
                sx={{
                  color: colors.primaryClean,
                }}
              >
                quero adotar
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: colors.primaryClean,
                }}
              >
                vou fazer parte!
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  color: colors.primaryClean,
                }}
              >
                Nos fale um pouco sobre você e sua rotina. Em breve retornaremos
                com um match felino perfeito para você!
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} lg={6}>
            <DarkThemeProvider>
              <Form />
              <Typography
                tabIndex={0}
                component="p"
                className="right footerCopyright"
                textAlign="right"
                aria-label="Texto de direitos autorais: Feito com carinho no CPQD"
              >
                © feito com ♡ no{" "}
                <Link
                  sx={{
                    color: colors.primaryClean,
                  }}
                  target="_blank"
                  aria-label="Link que direciona para o site do CPQD"
                  href="https://www.cpqd.com.br/"
                >
                  CPQD
                </Link>
              </Typography>
            </DarkThemeProvider>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
