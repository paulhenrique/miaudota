import { Box, styled } from "@mui/material";
import { colors } from "../../theme/ThemeProvider";

export const StyledForm = styled("form")`
  background: ${colors.neutral1};
  display: flex;
  flex-direction: column;
  max-width: 612px;
  flex: 1;
  padding: 63px 70px;
  gap: 32px;
  border-radius: 20px;
`;
