import styled from 'styled-components';

export const ItemWrap = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-height: calc(92vh - 100px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
  }
   
  &::-webkit-scrollbar-thumb {
    background: red;
    min-height: 120px;
    border-radius: 8px;
  }
`;

export const Item = styled.li`
  display: inline-block;
  margin: 0 16px 24px 16px;
`;