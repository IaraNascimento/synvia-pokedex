import Search from "./components/Search/Search";
import { Main, Container } from './App.style';
import TypeList from "./components/TypeList/TypeList";
import List from "./components/List/List";


function App() {
  return (
    <Main>
      <Search />
      <Container>
        <div>
          <TypeList />
        </div>
        <div>
          <List />
        </div>
      </Container>
    </Main>
  );
}

export default App;
