type Props = {
  text: string;
  color: string;
  chosen: boolean;
};

export default function NavigationButton({ text, color, chosen }: Props) {
  return (
    <button
      className={`font-bold px-[50px] hover:text-xl transition-all ${color} ${
        chosen ? "text-xl " : null
      }`}
    >
      {text}
    </button>
  );
}
