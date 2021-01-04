import styled from "styled-components";

const MenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TitleMenu = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 22.5px;

  ${({ theme }) => theme.media.phone`
    font-size: 20px;
  `}
`;

const LogoWrapper = styled.img`
  width: 109px;
  height: 109px;
  object-fit: cover;

  ${({ theme }) => theme.media.phone`
    width: 68px;
    height: unset;
  `}
`;

export { MenuWrapper, TitleMenu, LogoWrapper };
