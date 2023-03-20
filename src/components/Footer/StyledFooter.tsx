import { Box, styled } from "@mui/material";
import { colors } from "../../theme/ThemeProvider";
import CatBgFooter from "../../assets/bg-cat-02-footer.png";

export const StyledFooter = styled("footer")`
  background-color: ${colors.neutral2};
  color: ${colors.primaryClean};
  min-height: 846px;
  background-image: url(${CatBgFooter});
  background-repeat: no-repeat;
  background-position: bottom left;
  padding-top: 64px;
  .containerText {
    max-width: 456px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .containerFormAndText {
    display: grid;
    grid-template: "left right / 1fr 1fr" "left right / 1fr 1fr";
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }

  .footerCopyright {
    margin-top: 144px;
  }
`;
