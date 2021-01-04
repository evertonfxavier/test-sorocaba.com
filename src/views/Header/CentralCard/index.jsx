import React from "react";

import ScrollDown from "@components/ScrollDown";

import {
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
} from "./styles";

import ImageCard from "@images/imageheader.png";
import Featherone from "@images/featherone.png";
import Feathertwo from "@images/feathertwo.png";
import Featherthree from "@images/featherthree.png";
import Featherfour from "@images/featherfour.png";

const CentralCard = () => {
  return (
    <CardWrapper>
      <FeatherCardWrapper>
        <FeatherObjectOne src={Featherone} alt="Featherone" />
        <FeatherObjectTwo src={Feathertwo} alt="Feathertwo" />
        <FeatherObjectThree src={Featherthree} alt="Featherthree" />
        <FeatherObjectFour src={Featherfour} alt="Featherfour" />
      </FeatherCardWrapper>
      <CentralCardWrapper>
        <TitleCard>TRANSISTOR - RED THE SINGER</TitleCard>
        <CharaterCard src={ImageCard} alt="ImageCard" />
        <ObjectContent>
          <DescriptionCard>
            "Olha, o que quer que você esteja pensando, me faça um favor, não
            solte."
          </DescriptionCard>
        </ObjectContent>
        <ScrollDown />
      </CentralCardWrapper>
    </CardWrapper>
  );
};

export default CentralCard;
