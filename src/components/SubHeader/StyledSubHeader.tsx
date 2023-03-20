import { Box, styled } from "@mui/material";
import CatBackground from "../../assets/bg-cat-01.png";

export const StyledSubHeader = styled(Box)`
  background: url(${CatBackground}) no-repeat bottom right;
  background-size: 100% auto;
  height: 120vh;
  min-height: 981px;
  padding-top: 20vh;
  position: relative;
  width: 100%;
  .containerTypography {
    max-width: 744px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
`;
