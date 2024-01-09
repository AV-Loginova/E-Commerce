import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { likes } from "../../data/data";

export default function LikesElement(props) {
  function handleClick() {
    console.log("clicked", props.props.title);
    console.log(likes);
  }

  return (
    <div className="flex items-center w-[60vw] justify-around gap-[15px] mb-[30px]">
      <img
        src={props.props.image}
        alt={props.props.title}
        className="w-[80px]"
      />
      <p className="flex-1 text-black">{props.props.title}</p>
      <p className="font-bold"> ${props.props.price}</p>
      <button
        className="opacity-[0.5] hover:opacity-[1] py-[5px]"
        onClick={handleClick}
      >
        <Icon.HeartbreakFill size={20} color="#ff5e5e" />
      </button>
    </div>
  );
}
