import styled from 'styled-components';

export const Main = styled.main`
  display: block;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Container = styled.section`  
  & >:first-child {
    display: inline-block;
    vertical-align: top;
    width: 200px;
  }
  
  & >:last-child {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 200px);
  }
`;

