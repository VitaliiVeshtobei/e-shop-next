import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 9px;
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const WrapperPrice = styled.div`
  display: flex;
  margin-bottom: 22px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b6b6b6;
  border-radius: 8px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #2d3033;
  height: 30px;
  width: 60px;
  background-color: transparent;
  margin-left: auto;
  transition: transform ${(p) => p.theme.transition};
  :hover {
    transform: scale(1.1);
  }
`;
export const ButtonReset = styled.button`
  cursor: pointer;
  border: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #2d3033;
  display: inline;
  background-color: transparent;
  margin-left: auto;
  transition: transform ${(p) => p.theme.transition};
  :hover {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(p) => p.theme.colors.accentBg};
`;

export const InputMin = styled.input`
  width: 90px;
  height: 30px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${(p) => p.theme.colors.border};
  text-align: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #2d3033;
`;

export const InputMax = styled.input`
  margin-left: 12px;
  width: 90px;
  height: 30px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${(p) => p.theme.colors.border};
  text-align: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #2d3033;
`;

export const Slider = styled.div`
  position: relative;
  height: 3px;
  width: 100%;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.border};
  margin-top: 25px;
`;

export const Progress = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  height: 3px;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.scndDarkText};
`;
export const RangeInput = styled.div`
  position: relative;
`;
export const RangeMin = styled.input`
  position: absolute;
  top: -3px;
  height: 3px;
  margin: 0;
  width: 100%;
  appearance: none;
  background: none;
  pointer-events: none;

  &[type='range']::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.smoke};
    -webkit-appearance: none;
    pointer-events: auto;
  }
  &[type='range']::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    background-color: ${(p) => p.theme.colors.smoke};
    -moz-appearance: none;
    pointer-events: auto;
  }
`;
export const RangeMax = styled.input`
  position: absolute;
  top: -3px;
  height: 3px;
  margin: 0;
  width: 100%;
  appearance: none;
  background: none;
  pointer-events: none;

  &[type='range']::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.smoke};
    -webkit-appearance: none;
    pointer-events: auto;
  }
  &[type='range']::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    background-color: ${(p) => p.theme.colors.smoke};
    -moz-appearance: none;
    pointer-events: auto;
  }
`;
