interface IProps {
  items: string[];
  removeItem: (index: number) => void;
}

export default function List({ items, removeItem }: IProps) {
  return (
    <ul className="list-group col-3">
      {items?.map((item, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={index}
        >
          {item}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => removeItem(index)}
          ></button>
        </li>
      ))}
    </ul>
  );
}
