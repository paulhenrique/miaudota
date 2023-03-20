import { Box, styled } from "@mui/material";
import { colors } from "../../theme/ThemeProvider";
import HeaderDetail from "../../assets/headerDetail.png";

export const StyledHeader = styled(Box)`
  height: 100vh;
  position: relative;
  top: -80px;
  display: flex;
  justify-content: center;
  max-width: 60%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 34px;
  .headerText {
    .left {
      color: ${colors.purple};
    }
    .right {
      display: inline;
      color: ${colors.black};
    }
    &:before {
      content: "";
      background: url(${HeaderDetail}) no-repeat center center;
      width: 180px;
      height: 180px;
      position: absolute;
      right: -100px;
      top: 130px;
    }
  }
  .subtitle {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: ${colors.black};
  }
`;
