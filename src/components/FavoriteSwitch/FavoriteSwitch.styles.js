import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 8px;
  color: #999;
  font-size: 16px;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s ease all;
    border-radius: 50%;
  };
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: red;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;
