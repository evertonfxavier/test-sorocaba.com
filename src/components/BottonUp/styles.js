import styled from "styled-components";

import Icons from "@Icons";

const BottonWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  width: 100%;
`;

const CardWrapper = styled.div`
  background-color: ${({ scroll, theme }) =>
    scroll > 500 ? theme.colors.white : "trasparent"};
  position: fixed;
  width: 100%;
  max-width: 70px;
  height: 70px;
  border-radius: 107px;
  bottom: 26px;
  right: 20px;
  transition: all 0.6s;
  display: flex;
  align-items: center;
  place-content: center;
  cursor: pointer;
  box-shadow: 0px 0px 10px
    ${({ scroll, theme }) => (scroll > 500 ? theme.colors.black : "none")};

  svg {
    fill: ${({ scroll, theme }) =>
      scroll > 500 ? theme.colors.secondary.dark : "transparent"};
  }

  ${({ theme }) => theme.media.phone`
    max-width: 50px;
    height: 50px;
  `};
`;

const ArrowWrapper = styled(Icons.KeyboardArrowDown)`
  transform: rotate(180deg);
  width: 70px;
  height: 50px;
`;

export { BottonWrapper, CardWrapper, ArrowWrapper };
