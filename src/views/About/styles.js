import styled from "styled-components";

const AboutWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 50px 0;
`;

// const AboutWrapper = styled.section`
//   background-color: ${({ theme }) => theme.colors.secondary.dark};
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   padding: 50px 0;
// `;

const ContainerWrapper = styled.div`
  max-width: 1255px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  div.slick-slider {
    width: 100%;
    text-align: center;
    ul.slick-dots {
      display: none !important;
    }
    button.slick-arrow {
      background: white;
      border-radius: 24px;
      width: 39px;
      height: 39px;
    }
    button.slick-arrow::before {
      font-size: 50px;
      bottom: -9px;
      border-radius: 46px;
      color: ${({ theme }) => theme.colors.secondary.dark};
      left: -5px;
      position: absolute;
      opacity: unset;
    }
  }

  ${({ theme }) => theme.media.phone`
  div.slick-slider {
    button.slick-arrow {
      width: 24px;
      height: 24px;
    }
    button.slick-arrow::before {
      bottom: -5px;
      left: -3px;
      font-size: 30px;
    }
  }
  `}
`;

const SlideContainer = styled.div`
  max-width: 390px;
  width: 100%;
  height: 600px;
  cursor: pointer;
  outline: none;
`;

const ContentWrapper = styled.div`
  max-width: 310px;
  height: 28.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 27px;
  margin: 0 auto;
  text-align: -webkit-center;
  margin-top: 144px;

  ${({ theme }) => theme.media.phone`
    max-width: 250px;
  `}
`;

const ContentFigure = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  text-align: -webkit-center;
  width: 290px;
  height: 310px;
  position: absolute;
  top: 60px;
  margin-left: 7px;
  border: 3px solid;
  border-radius: 34px;
  border-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.phone`
    width: 230px;
    margin-left: 6px;
  `}
`;

const FigureWrapper = styled.img`
  max-width: 360px;
  height: 390px;
  position: absolute;
  bottom: -8px;
  right: 16px;

  ${({ theme }) => theme.media.phone`
    max-width: 270px;
    height: 340px;
    right: -10px;
  `}
`;

const ContentText = styled.div`
  position: relative;
  top: 256px;
  padding: 0px 26px;
  text-align: left;
`;

const DescriptionWrapper = styled.p`
  color: ${({ theme }) => theme.colors.secondary.dark};
  font-size: 17px;
  line-height: 22px;

  ${({ theme }) => theme.media.phone`
    text-align: center;
    font-size: 14px;
  `}
`;

export {
  AboutWrapper,
  ContainerWrapper,
  SlideContainer,
  ContentWrapper,
  ContentFigure,
  FigureWrapper,
  ContentText,
  DescriptionWrapper,
};
