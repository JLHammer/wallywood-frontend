import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import {
  contactSchema,
  type ContactFormValues,
} from "../../../schemas/contactSchema";
import { FormField } from "./FormField";
import { FormButtonGroup } from "./FormButtonGroup";
import { Button } from "../button/Button";

const ContactFormStyled = styled.form`
  width: ${theme.mobile.sizes.inputWidth};
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.l};

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.inputWidth};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.inputWidth};
  }
`;

const Fields = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.m};
`;

const emptyValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  "use no memo";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: emptyValues,
  });
  const [status, setStatus] = useState("");

  const onSubmit = (values: ContactFormValues) => {
    setStatus(
      `Tak for din besked, ${values.name} - vi vender tilbage hurtigst muligt.`,
    );
    reset();
  };

  const onInvalid = () => {
    setStatus("");
  };

  const handleReset = () => {
    reset();
    setStatus("");
  };

  return (
    <>
      <ContactFormStyled
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
      >
        <Fields>
          <FormField
            id="contact-name"
            label="Dit navn"
            placeholder="Indtast dit navn"
            autoComplete="name"
            registration={register("name")}
            error={errors.name?.message}
            required
          />
          <FormField
            id="contact-email"
            type="email"
            label="Din email"
            placeholder="Indtast din email"
            autoComplete="email"
            registration={register("email")}
            error={errors.email?.message}
            required
          />
          <FormField
            id="contact-message"
            label="Din besked"
            placeholder="Indtast en besked"
            autoComplete="off"
            registration={register("message")}
            error={errors.message?.message}
            multiline
            required
          />
        </Fields>
        <FormButtonGroup>
          <Button type="submit">Send</Button>
          <Button type="button" onClick={handleReset}>
            Annuller
          </Button>
        </FormButtonGroup>
      </ContactFormStyled>

      {status && <p>{status}</p>}
    </>
  );
};
