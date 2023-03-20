import { Typography, styled } from "@mui/material";
import { colors } from "../../theme/ThemeProvider";

const StyledTypography = styled(Typography)`
  font-size: 36px;
  .left {
    color: ${colors.purple};
  }
  .right {
    color: ${colors.black};
  }
`;

const Logo = () => {
  return (
    <>
      <StyledTypography variant="h1">
        <span className="left">miau</span>
        <span className="right">dota</span>
      </StyledTypography>
    </>
  );
};

export default Logo;
