import React from "react";

import SliderShow from "@components/common/SliderShow";

import {
  AboutWrapper,
  ContainerWrapper,
  SlideContainer,
  ContentWrapper,
  ContentFigure,
  FigureWrapper,
  ContentText,
  DescriptionWrapper,
} from "./styles";

import Grant from "@images/Grant.png";
import Red from "@images/Red.png";
import Sybil from "@images/Sybil.png";

const About = () => {
  return (
    <AboutWrapper>
      <ContainerWrapper>
        <SliderShow>
          <SlideContainer>
            <ContentWrapper>
              <ContentFigure>
                <FigureWrapper src={Grant} alt="Grant" />
              </ContentFigure>
              <ContentText>
                <DescriptionWrapper>
                  A Camerata foi apenas os dois no início, e suas fileiras nunca
                  foram destinadas a exceder um número a ser contado em uma mão.
                </DescriptionWrapper>
              </ContentText>
            </ContentWrapper>
          </SlideContainer>

          <SlideContainer>
            <ContentWrapper>
              <ContentFigure>
                <FigureWrapper src={Red} alt="Red" />
              </ContentFigure>
              <ContentText>
                <DescriptionWrapper>
                  Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
                  poderosa espada falante. O grupo Possessores quer tanto ela
                  quanto o Transistor e está perseguindo implacavelmente a sua
                  procura.
                </DescriptionWrapper>
              </ContentText>
            </ContentWrapper>
          </SlideContainer>

          <SlideContainer>
            <ContentWrapper>
              <ContentFigure>
                <FigureWrapper src={Sybil} alt="Sybil" />
              </ContentFigure>
              <ContentText>
                <DescriptionWrapper>
                  Sybil é descrita pelo Transistor como sendo os "olhos e
                  ouvidos" da Camerata.
                </DescriptionWrapper>
              </ContentText>
            </ContentWrapper>
          </SlideContainer>

          <SlideContainer>
            <ContentWrapper>
              <ContentFigure>
                <FigureWrapper src={Sybil} alt="Sybil" />
              </ContentFigure>
              <ContentText>
                <DescriptionWrapper>
                  Sybil é descrita pelo Transistor como sendo os "olhos e
                  ouvidos" da Camerata.
                </DescriptionWrapper>
              </ContentText>
            </ContentWrapper>
          </SlideContainer>
        </SliderShow>
      </ContainerWrapper>
    </AboutWrapper>
  );
};

export default About;
