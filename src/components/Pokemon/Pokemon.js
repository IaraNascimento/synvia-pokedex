import { useDispatch } from 'react-redux';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { favorite } from '../../slices/pokemonList';
import { Wrap, Image, Number, Name, IconWrap } from './Pokemon.style';
import TypeBullet from '../TypeBullet/TypeBullet';

function Pokemon(props) {
  const pokemon = props.pokemon;
  const dispatch = useDispatch();

  return (
    <Wrap>
      <IconWrap show={pokemon.isFavorite} onClick={() => dispatch(favorite(pokemon))} >
        {pokemon.isFavorite && <FontAwesomeIcon icon={faHeart} />}
        {!pokemon.isFavorite && <FontAwesomeIcon icon={emptyHeart} />}
      </IconWrap>
      <Image src={pokemon.sprites.large}></Image>
      <Number>Nº {pokemon.national_number}</Number>
      <Name>{pokemon.name}</Name>
      {pokemon.type.length && pokemon.type.map((type, index) => <TypeBullet key={index} type={type} />)}
    </Wrap>
  );
}

export default Pokemon;
