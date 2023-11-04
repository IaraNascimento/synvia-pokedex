import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  margin: 24px 0;
  min-width: 45%;
  width: 300px;
`;

export const SearchInput = styled.input`
  background-color: #eee;
  border: none;
  font-size: 16px;
  padding: 16px 24px;
  border-radius: 40px;
  width: 100%;
  box-sizing: border-box;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
  color: red;
`;
