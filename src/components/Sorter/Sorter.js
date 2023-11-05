import { useDispatch } from "react-redux";
import { Icon, Select, SelectWrap, Title, Wrap } from "./Sorter.style";
import { setSort } from "../../slices/pokemonList";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

function Sorter() {
  const dispatch = useDispatch();
  const options = [
    { value: 'national_number', label: 'Menor número primeiro' },
    { value: '-national_number', label: 'Maior número primeiro' },
    { value: 'name', label: 'Ordem Alfabética' },
    { value: '-name', label: 'Ordem Alfabética Inversa' },
  ];

  function handleSelect(event) {
    dispatch(setSort(event.target.value));
  }

  return (
    <Wrap>
      <Title>Ordenar por</Title>
      <SelectWrap>
        <Select name="select" onChange={handleSelect}>
          {options && options.map((item) =>
            <option value={item.value} selected={item.selected}>
              {item.label}
            </option>
          )}
        </Select>
        <Icon icon={faSortDown} />
      </SelectWrap>
    </Wrap>
  );
}

export default Sorter;
