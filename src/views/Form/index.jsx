import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormWrapper,
  ContainerWrapper,
  FormContainer,
  HeaderWrapper,
  TitleWrapper,
  DescriptionWrapper,
  FormContent,
  LabelWrapper,
  InputWrapper,
  TextAreaWrapper,
  ButtonWrapper,
  ConfirmInvitForm,
} from "./styles";

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const [inviteForm, setInviteForm] = useState();

  const onSubmit = (data) => {
    console.log(data);
    setInviteForm(data);
  };

  return (
    <FormWrapper>
      <ContainerWrapper>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <HeaderWrapper>
            <TitleWrapper>FORMULÁRIO</TitleWrapper>
            <DescriptionWrapper>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </DescriptionWrapper>
          </HeaderWrapper>
          <FormContent>
            <LabelWrapper htmlFor="Name">
              <InputWrapper
                type="name"
                name="Name"
                placeholder="Nome"
                ref={register({ required: true })}
              />
              {errors.Name && <span>Insira o seu nome</span>}
            </LabelWrapper>
            <LabelWrapper htmlFor="email">
              <InputWrapper
                type="email"
                name="email"
                placeholder="E-mail"
                ref={register({ required: true })}
              />
              {errors.email && <span>Insira o seu e-mail</span>}
            </LabelWrapper>
            <LabelWrapper htmlFor="textarea">
              <TextAreaWrapper
                placeholder="Mensagem"
                name="textarea"
                ref={register({ required: true })}
              />
              {errors.textarea && <span>Insira o sua mensagem</span>}
            </LabelWrapper>

            <ButtonWrapper type="submit">ENVIAR</ButtonWrapper>
            <ConfirmInvitForm>
              {inviteForm ? "Formulário enviado com sucesso!" : ""}
            </ConfirmInvitForm>
          </FormContent>
        </FormContainer>
      </ContainerWrapper>
    </FormWrapper>
  );
};

export default Form;
