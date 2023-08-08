interface IProps {
  items: string[];
}

export default function List({ items }: IProps) {
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
          ></button>
        </li>
      ))}
    </ul>
  );
}
