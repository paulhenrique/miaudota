import { Box, Typography } from "@mui/material";
import { PurpleText } from "../PurpleText";
import Container from "../Container";
import { StyledHero } from "./StyledHero";
import { informations } from "./informations";
import { links } from "../../config/links";

const Hero = () => {
  return (
    <StyledHero id={links.informacoesImportantes}>
      <Container>
        <div className="centeredText">
          <Typography variant="h2" tabIndex={0}>
            infor<PurpleText>miau</PurpleText>ções importantes
          </Typography>
          <Typography variant="h3" tabIndex={0}>
            o que saber antes de adotar
          </Typography>
        </div>
        <div className="contentItems">
          {informations.map((info) => (
            <Box key={info.title} className="containerInformation">
              <div>
                <div className="contentIcon">
                  <img
                    src={info.icon}
                    alt={info.iconLabel}
                    role="presentation"
                  />
                </div>
              </div>
              <div>
                <Typography variant="body2">
                  <strong>{info.title}</strong>
                </Typography>
                <Typography variant="body2">{info.content}</Typography>
              </div>
            </Box>
          ))}
        </div>
      </Container>
    </StyledHero>
  );
};

export default Hero;
