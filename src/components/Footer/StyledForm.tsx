import { Box, styled } from "@mui/material";
import { colors } from "../../theme/ThemeProvider";

export interface StyledFormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export const StyledForm: (
  props: StyledFormProps
) => JSX.Element | null = styled("form")`
  background: ${colors.neutral1};
  display: flex;
  flex-direction: column;
  max-width: 612px;
  flex: 1;
  padding: 63px 70px;
  gap: 32px;
  border-radius: 20px;
`;
