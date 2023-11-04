import { Tag } from './TypeBullet.style';

function TypeBullet(props) {
  const type = props.type;

  return (
    <Tag type={type}>{type}</ Tag>
  );
}

export default TypeBullet;
