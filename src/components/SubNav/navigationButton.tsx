import { Categories } from "../../types/types";

type Props = {
  props: Categories;
  onClick: any;
};

export default function NavigationButton({ props, onClick }: Props) {
  const handleClick = (event: any) => {
    onClick(event.target.id);
    props.chosen = true;
  };
  return (
    <button
      id={props.category}
      onClick={handleClick}
      className={`font-bold px-[20px] hover:text-xl transition-all ${
        props.color
      } ${props.chosen ? "text-xl" : null}`}
    >
      {props.name}
    </button>
  );
}
