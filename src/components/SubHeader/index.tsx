import { Typography } from "@mui/material";
import Container from "../Container";
import { colors } from "../../theme/ThemeProvider";
import { StyledSubHeader } from "./StyledSubHeader";
import { PurpleText } from "../PurpleText";
import { links } from "../../config/links";

const SubHeader = () => {
  return (
    <StyledSubHeader id={links.quemSomos} tabIndex={0}>
      <Container>
        <div className="containerTypography">
          <Typography
            sx={{
              color: colors.neutral1,
            }}
            variant="h2"
          >
            a <PurpleText>miau</PurpleText>dota
          </Typography>
          <Typography variant="h3">quem somos?</Typography>
          <Typography variant="body1">
            Nós somos uma instituição fictícia criada para a demonstração do
            treinamento de acessibilidade do CPQD... Mas a causa da adoção é
            muito real e precisa de ajuda!
          </Typography>
        </div>
      </Container>
    </StyledSubHeader>
  );
};

export default SubHeader;
