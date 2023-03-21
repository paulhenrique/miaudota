import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FaPaw } from "react-icons/fa";
import { colors } from "../../theme/ThemeProvider";
import { EVENTS, appEmitter } from "../../events";

const SimpleModal = () => {
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState({
    title: "Modal Text",
    text: "",
  } as { text: string; title: string } | null);

  const handleCloseModal = () => {
    setOpen(false);
    setModalText(null);
  };

  useEffect(() => {
    const listener = appEmitter.addListener(
      EVENTS.OPEN_MODAL,
      ({ text, title }: { text: string; title: string }) => {
        setModalText({ text, title });
        setOpen(true);
      }
    );

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width="312px"
        gap="20px"
        padding="20px"
        color={colors.neutral1}
      >
        <DialogTitle
          sx={{
            gap: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <FaPaw color={colors.neutral1} />
          <Typography
            variant="body2"
            sx={{
              size: "20px",
            }}
          >
            {modalText && modalText.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          {modalText && (
            <DialogContentText>
              <Typography variant="body2">{modalText.text}</Typography>
            </DialogContentText>
          )}
        </DialogContent>
      </Box>
      <DialogActions>
        <Button
          autoFocus
          color="primary"
          variant="text"
          onClick={handleCloseModal}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleModal;
