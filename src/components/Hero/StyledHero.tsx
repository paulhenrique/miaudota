import { Box, styled } from "@mui/material";
import { colors } from "../../theme/ThemeProvider";

export const StyledHero = styled(Box)`
  background-color: ${colors.primaryClean};
  padding-top: 112px;
  padding-bottom: 105px;
  z-index: 2;
  .centeredText {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;
  }
  @keyframes animeRotateVertical {
    0% {
      transform: translateY(-200%);
      opacity: 0;
    }
    50% {
      transform: translateY(-200%);
      opacity: 0;
    }
    51% {
      transform: translateY(200%);
      opacity: 0;
      z-index: -1;
    }
    52% {
      z-index: -1;
      transform: translateY(200%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .contentIcon {
    width: 168px;
    height: 168px;
    border-radius: 100%;
    background: ${colors.neutral1};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background ease-in-out 0.5s;
    img {
      max-width: 100%;
      width: 103px;
    }
    &:hover {
      background: ${colors.purple};
      img {
        animation: animeRotateVertical cubic-bezier(0.42, 0, 0.41, 1.35) 1s;
      }
    }
  }
  .containerInformation {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;
