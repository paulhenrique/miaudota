import { Button, TextField } from "@mui/material";
import PawIcon from "../../assets/icons/paw.svg";
import { StyledForm } from "./StyledForm";

export const Form = () => {
  return (
    <>
      <StyledForm
        tabIndex={0}
        aria-label="Formulário para contato sobre adoção"
      >
        <TextField
          placeholder="Digite seu nome..."
          label="Nome"
          helperText="Campo obrigatório"
          required
        />
        <TextField
          placeholder="Digite seu email..."
          label="Email"
          type="email"
          helperText="Campo obrigatório"
          required
        />

        <TextField
          placeholder="Digite sua mensagem..."
          label="Mensagem"
          helperText="Campo obrigatório"
          required
          multiline
          rows={4}
        />

        <Button
          type="submit"
          startIcon={
            <img src={PawIcon} role="presentation" alt="Ícone de pata" />
          }
          variant="contained"
        >
          Quero adotar!
        </Button>
      </StyledForm>
    </>
  );
};
