interface IProps {
  items: string[];
}

export default function List({ items }: IProps) {
  return (
    <ul>
      {items?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
