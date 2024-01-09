import { useEffect, useState } from "react";
import Card from "./card";
import { Data } from "../../types/types";
import GoodInfo from "./goodInfo";
import { categories } from "../../data/data";
import Likes from "../Likes/Likes";

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
  const handleClick = (e: string) => {
    setElement(e);
  };
  const handleDelete = () => {
    setElement("");
  };
  return (
    <div className="flex flex-wrap gap-[20px] mx-[20px] justify-center mb-[20px]">
      <Likes props={data} />
      {element !== "" ? (
        <GoodInfo props={data[Number(element)]} onClick={handleDelete} />
      ) : (
        data.map((good, index) => {
          if (good.category === getCategory) {
            categories.map((category) => {
              category.chosen = false;
            });
            return (
              <Card
                index={index}
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
