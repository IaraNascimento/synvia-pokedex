import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  color: #999;
  font-size: 16px;
  margin-right: 16px;
`;

export const SelectWrap = styled.div`
  position: relative;
`;

export const Select = styled.select`
  border-radius: 40px;
  padding: 8px 32px 8px 16px;
  border: 1px solid red;
  color: red;
  outline: none;
  appearance: none;

  &:focus, &:focus-visible {
    outline: none;
    border: 1px solid red;
  }

  option {
    background-color: white;
    color: #666;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 4px;
  right: 12px;
  color: red;
`;
