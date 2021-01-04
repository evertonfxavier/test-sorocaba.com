import styled from "styled-components";

import CardHeader from "@images/cardheader.png";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 680px;
  position: relative;
  display: flex;
  align-items: center;
  place-content: center;
`;

const FeatherCardWrapper = styled.div`
  min-height: calc(100vh - 732px);
  width: 100%;
  position: absolute;
  z-index: 1;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 8rem;
  text-align: center;
  grid-template-areas:
    " fOne fTwo"
    " fThree fFuor";

  ${({ theme }) => theme.media.phone`
    grid-column-gap: 0;
  `};
`;

const FeatherObjectOne = styled.img`
  grid-area: fOne;
  object-fit: fill;

  ${({ theme }) => theme.media.phone`
    width: 66px;
    height: 66px;
  `};
`;

const FeatherObjectTwo = styled.img`
  grid-area: fThree;
  padding-left: 4.3rem;
  object-fit: fill;

  ${({ theme }) => theme.media.phone`
    width: 46px;
    height: 46px;
    padding-left: 2rem;
  `};
`;

const FeatherObjectThree = styled.img`
  grid-area: fFuor;
  padding-left: 4rem;
  object-fit: fill;

  ${({ theme }) => theme.media.phone`
    width: 66px;
    height: 66px;
  `};
`;

const FeatherObjectFour = styled.img`
  grid-area: fTwo;
  object-fit: fill;

  ${({ theme }) => theme.media.phone`
    width: 100px;
    height: 100px;
    padding-left: 50px;
  `};
`;

const CentralCardWrapper = styled.div`
  background-image: url(${CardHeader});
  background-size: cover;
  width: 100%;
  max-width: 586px;
  box-shadow: 0px 3px 6px #00000099;
  padding: 1rem 0 2rem;
  position: relative;

  ${({ theme }) => theme.media.phone`
    max-width: 300px;
  `}
`;

const TitleCard = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 510px;
  font-size: 15px;
  text-align: left;
  padding: 12px 0;

  ${({ theme }) => theme.media.phone`
    text-align: center;
    font-size: 14px;
  `}
`;

const CharaterCard = styled.img`
  width: 100%;
  max-width: 526px;
  height: 754px;
  object-fit: cover;

  ${({ theme }) => theme.media.phone`
    max-width: 270px;
    height: unset;
  `}
`;

const ObjectContent = styled.div`
  width: 100%;
  max-width: 271px;
  padding: 12px 0;
`;

const DescriptionCard = styled.span`
  color: ${({ theme }) => theme.colors.smoth.dark};
  font-size: 20px;
  text-shadow: 0px 3px 6px #00000029;

  ${({ theme }) => theme.media.phone`
    font-size: 14px;
  `}
`;

export {
  CardWrapper,
  FeatherCardWrapper,
  FeatherObjectOne,
  FeatherObjectTwo,
  FeatherObjectThree,
  FeatherObjectFour,
  CentralCardWrapper,
  TitleCard,
  CharaterCard,
  ObjectContent,
  DescriptionCard,
};
