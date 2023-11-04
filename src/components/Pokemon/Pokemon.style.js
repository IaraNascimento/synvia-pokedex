import styled from 'styled-components';

export const Wrap = styled.div`
  width: 160px;
  height: 240px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 8px 16px;
  border-radius: 6px;
  box-sizing: border-box;
  transition: .4s ease all;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 8px auto 16px auto;
  max-height: 50%;
  max-width: 100%;
`;

export const Number = styled.div`
  color: #aaa;
`;

export const Name = styled.strong`
  display: block;
  color: #666;
  margin-bottom: 8px;
`;
