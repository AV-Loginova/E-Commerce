import * as Icon from "react-bootstrap-icons";
import { Data } from "../../types/types";

type Props = {
  props: Data;
};

export default function GoodInfo({ props }: Props) {
  const addStar = (n: number) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      n >= 0.5
        ? arr.push(<Icon.StarFill color="#ffd45e" />)
        : arr.push(<Icon.Star color="#c2c2c2" />);
      n--;
    }
    return arr;
  };
  return (
    <section className="flex flex-col lg:flex-row gap-[5vw] w-[70%] justify-around mt-[2vh] pb-[20px]">
      <div>
        <img src={props?.image} className="min-w-[30vw]"></img>
      </div>
      <div className="min-w-[40vw] text-center flex flex-col">
        <p className="text-4xl font-bold mt-[20px]">{props?.title}</p>
        <p className="flex-1 italic text-sm">
          <strong className="text-lg flex gap-[5px] justify-center items-center">
            {props?.rating.rate}
            <div className="flex">{addStar(props?.rating.rate)}</div>
          </strong>{" "}
          {props?.rating.count} reviews
        </p>
        <p className="flex-1">{props?.description}</p>
        <p className="mb-[10px] font-bold">${props?.price}</p>
        <div className="flex justify-center gap-[10px]">
          <button className="bg-[#242424] py-[10px] w-[100px] flex justify-center rounded-[5px] hover:bg-[#363636]">
            <Icon.CartPlusFill color="white" size={25} />
          </button>
          <button className="bg-[#242424] py-[10px] w-[100px] flex justify-center rounded-[5px] hover:bg-[#363636]">
            <Icon.HeartFill color="white" size={25} />
          </button>
        </div>
      </div>
      <button className="ml-auto mb-auto">
        <Icon.XLg size={20} />
      </button>
    </section>
  );
}
