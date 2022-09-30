type Props = {
  text: string;
  className?: string;
};

export default function Pill({ text, className }: Props) {
  return (
    <div
      className={`m-2 inline-block rounded-full bg-cyan-700 bg-opacity-50 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm ${className}`}
    >
      {text}
    </div>
  );
}
