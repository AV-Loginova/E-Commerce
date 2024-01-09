import * as Icon from "react-bootstrap-icons";
import { Data } from "../../types/types";
import { useState } from "react";
import { likes } from "../../data/data";

type Props = {
  props: Data;
  onClick: any;
};

export default function GoodInfo({ props, onClick }: Props) {
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("likes"))?.includes(props.title)
  );

  const addStar = (n: number) => {
    let count = 0;
    let arr = [];
    for (let i = 0; i < 5; i++) {
      n >= 0.5
        ? arr.push(<Icon.StarFill key={`filled${count}`} color="#ffd45e" />)
        : arr.push(<Icon.Star key={`empty${count}`} color="#c2c2c2" />);
      n--;
      count++;
    }
    return arr;
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick(e.currentTarget.id);
  };

  const handleLike = () => {
    if (like == true) {
      let index = likes.indexOf(props.title);
      likes.splice(index, 1);
      localStorage.removeItem(props.title);
    } else {
      likes.push(props.title);
      localStorage.setItem(props.title, JSON.stringify(props));
    }
    localStorage.setItem("likes", JSON.stringify(likes));
    setLike(!like);
    // localStorage.clear();
  };
  return (
    <section className="bg-[white] flex flex-col lg:flex-row gap-[5vw] w-[70%] justify-around mt-[2vh] py-[20px] mt-[-55px]">
      <div className="flex justify-center">
        <img src={props?.image} className="max-w-[300px]"></img>
      </div>
      <div className="min-w-[40vw] text-center flex flex-col">
        <p className="text-4xl font-bold mt-[20px]">{props?.title}</p>
        <div className="flex-1 italic text-sm">
          <strong className="text-lg flex gap-[5px] justify-center items-center">
            {props?.rating.rate}
            <div className="flex">{addStar(props?.rating.rate)}</div>
          </strong>{" "}
          {props?.rating.count} reviews
        </div>
        <p className="flex-1">{props?.description}</p>
        <p className="mb-[10px] font-bold">${props?.price}</p>
        <div className="flex justify-center gap-[10px]">
          <button className="bg-[#242424] py-[10px] w-[100px] flex justify-center rounded-[5px] hover:bg-[#363636]">
            <Icon.CartPlusFill color="white" size={25} />
          </button>
          <button
            onClick={handleLike}
            className="bg-[#242424] py-[10px] w-[100px] flex justify-center rounded-[5px] hover:bg-[#363636]"
          >
            <Icon.HeartFill
              color={
                JSON.parse(localStorage.getItem("likes"))?.includes(props.title)
                  ? "#ff4262"
                  : "white"
              }
              size={25}
            />
          </button>
        </div>
      </div>
      <button
        className="ml-auto mb-auto order-[-1] lg:order-[1]"
        onClick={handleClick}
      >
        <Icon.XLg size={20} id="delete" />
      </button>
    </section>
  );
}
