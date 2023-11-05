import { Inner, Logout, Title, Wrap } from './Header.style';
import { ReactComponent as Logo } from '../../assets/pokeball.svg';
import { ReactComponent as UserImg } from '../../assets/synvia-A.svg';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Wrap>
      <Inner>
        <div>
          <Logo />
          <Title>Pokédex - Synvia - Teste: Iara Nascimento Sztybe</Title>
        </div>
        <div>
          <UserImg />
          <Logout icon={faRightFromBracket} />
        </div>
      </Inner>
    </Wrap>
  );
}

export default Header;
