import * as Icon from "react-bootstrap-icons";

export default function NavBar() {
  return (
    <nav className="w-[100vw] h-[80px] bg-[#ededed]">
      <ul className="list-none flex h-[80px] justify-between items-center gap-[10px]">
        <li className="flex items-end flex-1">
          <Icon.LifePreserver size={40} color="#242424" />
          <strong className="text-4xl text-[#242424]">LifePreserver</strong>
        </li>
        <li className="flex-1">
          <input
            placeholder="Search..."
            type="search"
            className="border-[1px] border-[#b5b5b5] rounded-[5px] outline-gray-700 p-[5px]"
          ></input>
        </li>
        <li>
          <button className="p-[5px] outline-gray-700">
            <Icon.CartFill size={30} color="#242424" />
          </button>
        </li>
        <li>
          <button className="p-[5px] outline-gray-700">
            <Icon.HeartFill size={25} color="#242424" />
          </button>
        </li>
        <li className="mr-[10px]">
          <button className="p-[5px] outline-gray-700">
            <Icon.PersonCircle size={25} color="#242424" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
