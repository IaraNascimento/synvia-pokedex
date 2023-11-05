import Search from "./components/Search/Search";
import { Main, Container, TopContainer } from './App.style';
import TypeList from "./components/TypeList/TypeList";
import FavoriteSwitch from "./components/FavoriteSwitch/FavoriteSwitch";
import List from "./components/List/List";
import Sorter from "./components/Sorter/Sorter";

function App() {
  return (
    <Main>
      <TopContainer>
        <Search />
        <Sorter />
      </TopContainer>
      <Container>
        <div>
          <TypeList />
          <FavoriteSwitch />
        </div>
        <div>
          <List />
        </div>
      </Container>
    </Main>
  );
}

export default App;
