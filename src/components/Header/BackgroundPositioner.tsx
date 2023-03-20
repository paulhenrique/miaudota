import { Box, styled } from "@mui/material";
import CatBackground from "../../assets/cat.png";

export const BackgroundPositioner = styled(Box)`
  background: url(${CatBackground}) no-repeat bottom left;
  background-size: 40% auto;
  min-height: 650px;
  height: 100vh;
  margin-top: 70px;
`;
