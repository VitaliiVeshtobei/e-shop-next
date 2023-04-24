import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
import { MdProductionQuantityLimits } from 'react-icons/md';

export const Container = styled.section`
  width: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
  padding: 50px 15px 30px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  color: #2d3033;
  text-align: center;

  @media ${DEVICE.mobileMax} {
    font-size: 24px;
  }
`;

export const Text = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  color: #2d3033;
  text-align: center;
  margin-top: 10px;

  @media ${DEVICE.mobileMax} {
    font-size: 16px;
  }
`;

export const ContainerIcon = styled.div`
  position: relative;
  margin-top: 30px;
  animation-name: movingShoppingCarts;
  animation-duration: 10000ms;
  animation-timing-function: linear;

  animation-iteration-count: infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes movingShoppingCarts {
    0% {
      transform: translateX(0%);
    }
    30% {
      transform: translateX(100%);
    }
    65% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export const Icon = styled(MdProductionQuantityLimits)`
  position: relative;
  width: 100px;
  height: 100px;

  fill: ${(p) => p.theme.colors.scndDarkText};
  z-index: 1;

  @media ${DEVICE.tablet} {
    width: 150px;
    height: 150px;
  }
  @media ${DEVICE.laptop} {
    width: 200px;
    height: 200px;
  }

  animation-name: clampShoppingCarts;
  animation-duration: 5000ms;
  animation-timing-function: linear;

  animation-iteration-count: infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes clampShoppingCarts {
    0% {
      transform: translateY(0%);
    }
    20% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-20%);
    }
    60% {
      transform: translateY(0%);
    }
    70% {
      transform: translateY(-15%);
    }
    80% {
      transform: translateY(0%);
    }
    90% {
      transform: translateY(-8%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

export const Div = styled.div`
  position: absolute;
  bottom: 5px;
  background-color: silver;
  width: 90px;
  height: 15px;
  border-radius: 50%;
  transform: rotateX(50deg);

  @media ${DEVICE.tablet} {
    width: 130px;
    bottom: 10px;
  }
  @media ${DEVICE.laptop} {
    width: 180px;
    height: 20px;
  }
`;
