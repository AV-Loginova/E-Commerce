import { useEffect, useState } from "react";
import Card from "./card";
import { Data } from "../../types/types";
import GoodInfo from "./goodInfo";

export default function Catalogue({ getCategory }: any) {
  const [data, setData] = useState<Data[]>([]);
  const [element, setElement] = useState("");
  useEffect(() => {
    async function fetchData() {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  const handleClick = (e: any) => {
    console.log(e);
    setElement(e);
  };

  if (element !== "") {
  }
  return (
    <div className="flex flex-wrap gap-[20px] mx-[20px] justify-center">
      {element !== "" ? (
        <GoodInfo props={data[Number(element)]} />
      ) : (
        data.map((good, index) => {
          if (good.category == getCategory) {
            return (
              <Card
                index={index}
                id={good.id}
                title={good.title}
                price={good.price}
                key={good.id}
                image={good.image}
                onClick={handleClick}
              />
            );
          }
          return;
        })
      )}
    </div>
  );
}
