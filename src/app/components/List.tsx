import { Trash2 } from "react-feather";

interface IProps {
  items: string[];
  removeItem: (index: number) => void;
}

export default function List({ items, removeItem }: IProps) {
  return (
    <ul className="list-group col-6">
      {items?.map((item, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={index}
        >
          {item}
          <Trash2
            data-testid="remove-item"
            type="button"
            onClick={() => removeItem(index)}
          />
        </li>
      ))}
    </ul>
  );
}
