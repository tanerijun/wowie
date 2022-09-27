type Props = {
  text: string;
  className?: string;
};

export default function Pill({ text, className }: Props) {
  return (
    <div
      className={`m-2 inline-block rounded-full bg-cyan-800 px-2 py-1 text-sm font-bold text-white ${className}`}
    >
      {text}
    </div>
  );
}
