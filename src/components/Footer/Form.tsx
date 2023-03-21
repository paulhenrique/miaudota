import { Button, TextField } from "@mui/material";
import PawIcon from "../../assets/icons/paw.svg";
import { StyledForm } from "./StyledForm";
import { Form as FinalForm, Field } from "react-final-form";

export const Form = () => {
  const handleSubmitForm = (fields: any) => {
    alert("Obrigado pelo seu contato, em breve retornaremos!");
  };

  return (
    <FinalForm
      validate={(values) => {
        let errors = {};
        if (values.name === undefined || values.name === "") {
          errors = { ...errors, name: "Nome é um campo obrigatório" };
        }
        if (values.email === undefined || values.email === "") {
          errors = { ...errors, email: "E-mail é um campo obrigatório" };
        }

        if (values.message === undefined || values.message === "") {
          errors = { ...errors, message: "A mensagem é um campo obrigatório" };
        }

        return errors;
      }}
      onSubmit={handleSubmitForm}
      render={({ handleSubmit }) => (
        <StyledForm
          onSubmit={handleSubmit}
          tabIndex={0}
          aria-label="Formulário para contato sobre adoção"
        >
          <Field
            name="name"
            render={({ input, meta }) => (
              <TextField
                placeholder="Digite seu nome..."
                label="Nome"
                helperText="Campo obrigatório"
                required
                error={meta.error && meta.touched}
                {...input}
              />
            )}
          />

          <Field
            name="email"
            render={({ input, meta }) => (
              <TextField
                placeholder="Digite seu email..."
                label="Email"
                type="email"
                required
                error={meta.error && meta.touched}
                {...input}
              />
            )}
          />

          <Field
            name="message"
            render={({ input, meta }) => (
              <TextField
                placeholder="Digite sua mensagem..."
                label="Mensagem"
                helperText="Campo obrigatório"
                required
                multiline
                rows={4}
                aria-label="Mensagem"
                error={meta.error && meta.touched}
                {...input}
              />
            )}
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
      )}
    ></FinalForm>
  );
};
