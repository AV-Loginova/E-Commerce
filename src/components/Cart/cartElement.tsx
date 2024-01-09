import * as Icon from "react-bootstrap-icons";

export default function CartElement() {
  return (
    <div className="flex items-center w-[500px] justify-around gap-[10px]">
      <Icon.LifePreserver size={70} />
      <p className="flex-1">Some name</p>
      <p className="font-bold"> price</p>
      <button className="opacity-[0.5] hover:opacity-[1] py-[5px]">
        <Icon.Trash3Fill size={20} color="#ff5e5e" />
      </button>
    </div>
  );
}
