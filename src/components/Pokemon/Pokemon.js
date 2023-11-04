import { Wrap, Image, Number, Name } from './Pokemon.style';
import Type from "../Type/Type";

function Pokemon(props) {
  const pokemon = props.pokemon;

  return (
    <Wrap>
      <Image src={pokemon.sprites.large}></Image>
      <Number>Nº {pokemon.national_number}</Number>
      <Name>{pokemon.name}</Name>
      {pokemon.type.length && pokemon.type.map((type, index) => <Type key={index} type={type} />)}
    </Wrap>
  );
}

export default Pokemon;
