import styled from 'styled-components';

export const Tag = styled.span`
  background-color: gray;
  color: white;
  border-radius: 4px;
  margin: 0 8px 0 0;
  padding: 2px 6px;

  ${({ type }) => type.toLowerCase() === 'grass' && `
    background-color: #51DE98;
  `}

  ${({ type }) => type.toLowerCase() === 'poison' && `
    background-color: #B000E3;
  `}

  ${({ type }) => type.toLowerCase() === 'fire' && `
    background-color: orange;
  `}

  ${({ type }) => type.toLowerCase() === 'flying' && `
    background-color: #56C5F6;
  `}

  ${({ type }) => type.toLowerCase() === 'water' && `
    background-color: #428AE0;
  `}

  ${({ type }) => type.toLowerCase() === 'bug' && `
    background-color: green;
  `}

  ${({ type }) => type.toLowerCase() === 'dark' && `
    background-color: #333;
  `}

  ${({ type }) => type.toLowerCase() === 'dragon' && `
    background-color: purple;
  `}

  ${({ type }) => type.toLowerCase() === 'electric' && `
    background-color: gold;
  `}

  ${({ type }) => type.toLowerCase() === 'fairy' && `
    background-color: fuchsia;
  `}

  ${({ type }) => type.toLowerCase() === 'fighting' && `
    background-color: firebrick;
  `}

  ${({ type }) => type.toLowerCase() === 'ghost' && `
    background-color: rebeccapurple;
  `}

  ${({ type }) => type.toLowerCase() === 'ground' && `
    background-color: brown;
  `}

  ${({ type }) => type.toLowerCase() === 'ice' && `
    background-color: blue;
  `}

  ${({ type }) => type.toLowerCase() === 'psychic' && `
    background-color: blueviolet;
  `}

  ${({ type }) => type.toLowerCase() === 'rock' && `
    background-color: chocolate;
  `}

  ${({ type }) => type.toLowerCase() === 'steel' && `
    background-color: silver;
  `}

`;