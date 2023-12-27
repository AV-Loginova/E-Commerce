import NavigationButton from "./navigationButton";

const categories = [
  {
    name: "MEN",
    chosen: false,
    color: "text-black",
  },
  {
    name: "WOMEN",
    chosen: true,
    color: "text-black",
  },
  {
    name: "SALE",
    chosen: false,
    color: "text-red-400",
  },
];

export default function SubNav() {
  return (
    <div className="flex ml-[30px] gap-[10px] py-[20px] justify-center h-[60px] mb-[10px]">
      {categories.map((category) => (
        <NavigationButton
          key={category.name}
          text={category.name}
          color={category.color}
          chosen={category.chosen}
        />
      ))}
    </div>
  );
}
