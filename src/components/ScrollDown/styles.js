import styled from "styled-components";

import Icons from "@Icons";

const ScrollDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  max-width: 586px;
`;

const MouseWrapper = styled(Icons.Mouse)`
  width: 55px;
  height: 62px;
  fill: ${({ theme }) => theme.colors.white};
`;

const ArrowWrapper = styled(Icons.KeyboardArrowDown)`
  width: 46px;
  height: 34px;
  fill: ${({ theme }) => theme.colors.white};
  animation: arrow 1.5s infinite;
  margin-top: -26px;

  @keyframes arrow {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  } ;
`;

export { ScrollDownWrapper, MouseWrapper, ArrowWrapper };
