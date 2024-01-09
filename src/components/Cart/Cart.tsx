import CartElement from "./cartElement";

export default function Cart() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Your cart</h1>
      <CartElement />
    </div>
  );
}
