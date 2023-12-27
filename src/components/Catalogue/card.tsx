type Props = {
  title: string;
  price: number;
  image: string;
};

export default function Card({ title, price, image }: Props) {
  return (
    <div className="w-[250px] rounded-[10px] flex flex-col items-center p-[10px] basis-1/4 bg-[#242424]">
      <div className="w-[80%] flex justify-center bg-[white] rounded-[10px] my-[20px]">
        <img src={image} alt={title} className="h-[150px] my-[20px]" />
      </div>
      <p className="flex-1 text-center text-sm text-white">{title}</p>
      <p className="font-bold text-white">{`$${price}`}</p>
      <button className="bg-[white] text-black p-[5px] rounded-[5px] w-[100px] hover:bg-[#e8e8e8]">
        More
      </button>
    </div>
  );
}
