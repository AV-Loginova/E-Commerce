import NavigationButton from "./navigationButton";
import { categories } from "../../data/data";
import { useState } from "react";
import Catalogue from "../Catalogue/Catalogue";

export default function SubNav() {
  const [category, setCategory] = useState();

  const handleClick = (e: React.SetStateAction<undefined>) => {
    setCategory(e);
    console.log(e);
  };

  return (
    <>
      <div className="flex ml-[30px] gap-[10px] py-[10px] justify-center h-[60px] mb-[10px] w-(100vw)  items-start">
        {categories.map((category) => {
          return (
            <NavigationButton
              onClick={handleClick}
              props={category}
              key={category.index}
            />
          );
        })}
      </div>
      <Catalogue getCategory={category} />
    </>
  );
}
