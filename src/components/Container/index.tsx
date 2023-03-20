import { Box, BoxProps } from "@mui/material";
import React from "react";

export interface ContainerProps extends BoxProps {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <Box
      {...props}
      sx={{
        width: "80%",
        maxWidth: "1110px",
        margin: "0 auto",
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
