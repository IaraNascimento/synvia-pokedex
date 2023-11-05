import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrap = styled.header`
  background-color: red;
  position: sticky;
  z-index: 999;
  top: -10px;
  box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  height: 80px;

  & * {
    vertical-align: middle;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  font-size: 24px;
  color: white;
  margin-left: 16px;
`;

export const Logout = styled(FontAwesomeIcon)`
  color: white;
  margin-left: 16px;
  font-size: 18px;
`;
