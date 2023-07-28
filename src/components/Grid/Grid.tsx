type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Grid({ title, children }: Props) {
  return (
    <section className="m-auto mt-8 max-w-7xl p-4">
      <h2 className="pb-4 text-xl font-bold text-gray-100">{title}</h2>
      <div className="grid grid-cols-auto-fill gap-2">{children}</div>
    </section>
  );
}
