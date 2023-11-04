import { Tag } from './Type.style';

function Type(props) {
  const type = props.type;

  return (
    <Tag type={type}>{type}</ Tag>
  );
}

export default Type;
