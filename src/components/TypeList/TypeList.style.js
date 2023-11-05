import styled from 'styled-components';

export const Title = styled.h2`
  color: #999;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0 8px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-height: calc(80vh - 100px);
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
  margin: 4px 8px 4px 0;
  padding: 6px 12px;
  border: 1px solid red;
  border-radius: 40px;
  color: red;
  font-size: 14px;
  cursor: pointer;

  ${({ selected }) => selected && `
    color: white;
    background-color: red;
    & > span {
      margin-left: 8px;
    }
  `}
`;
