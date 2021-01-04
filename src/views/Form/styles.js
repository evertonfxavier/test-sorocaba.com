import styled, { css } from "styled-components";

const FormWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
`;

const ContainerWrapper = styled.div`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary.light},
    ${({ theme }) => theme.colors.primary.dark}
  );
  width: 100%;
  min-height: calc(100vh - 510px);
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 1082px;
  width: 100%;
  border-radius: 14px;
  margin: -3.4rem 0;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 745px;
  margin-bottom: 4rem;
  text-align: left;

  ${({ theme }) => theme.media.phone`
    max-width: 270px;
    text-align: center;
    margin-bottom: 2rem;
  `}
`;

const TitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.primary.mid};
  font-size: 35px;
  text-align: center;
  padding-bottom: 2rem;

  ${({ theme }) => theme.media.phone`
    font-size: 24px;
  `}
`;

const DescriptionWrapper = styled.span`
  color: ${({ theme }) => theme.colors.secondary.dark};
  font-size: 20px;

  ${({ theme }) => theme.media.phone`
    font-size: 14px;
  `}
`;

const FormContent = styled.div`
  width: 100%;
  max-width: 580px;
  display: grid;
  grid-template-areas:
    "inputname inputemail"
    "textarea textarea"
    "botton .";
  grid-row-gap: 32px;

  &:last-child {
    color: red;
  }

  ${({ theme }) => theme.media.phone`
  justify-items: center;
    grid-template-areas:
        "inputname"
        "inputemail"
        "textarea"
        "botton";
  `}
`;

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 14px;
  width: 100%;
  align-items: center;

  &:nth-child(1) {
    grid-area: inputname;
  }

  &:nth-child(2) {
    grid-area: inputemail;
  }

  &:nth-child(3) {
    grid-area: textarea;
  }

  span {
    color: ${({ theme }) => theme.colors.danger};
    transition: all 0.6s ease;
    margin-top: 6px;
  }
`;

const InputCommon = css`
  width: 100%;
  border: 3px solid;
  border-radius: 2px;
  padding-left: 10px;
  font-size: 18px;
  border-color: ${({ theme }) => theme.colors.secondary.light};
  color: ${({ theme }) => theme.colors.secondary.dark};
  outline: none;

  ${({ theme }) => theme.media.phone`
    max-width: 270px;
    height: 38px;
    font-size: 14px;
  `}
`;

const InputWrapper = styled.input`
  ${InputCommon}
  max-width: 238px;
  height: 48px;

  ${({ theme }) => theme.media.phone`
    max-width: 270px;
    height: 38px;
  `}
`;

const TextAreaWrapper = styled.textarea`
  ${InputCommon}
  max-width: 527px;
  height: 197px;

  ${({ theme }) => theme.media.phone`
    max-width: 270px;
    height: 90px;
  `}
`;

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.mid};
  color: ${({ theme }) => theme.colors.white};
  max-width: 248px;
  width: 100%;
  height: 48px;
  cursor: pointer;
  border: none;
  outline: none;
  grid-area: botton;
  place-self: center;
  font-size: 16px;
  transition: all 0.6s ease;

  &:hover{
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  ${({ theme }) => theme.media.phone`
    font-size: 14px;
  `}
`;

const ConfirmInvitForm = styled.div`
  color: ${({ theme }) => theme.colors.success};
  transform: translateY(14px);
  display: inline-block;
  font-size: 14px;
`;

export {
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
};
