type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  return (
    <div>
      <div className="sm:text-md p-4 text-sm text-gray-100">
        <a href="#">
          <span className="cursor-pointer whitespace-nowrap font-bold hover:text-cyan-200">
            {title}
          </span>
        </a>
      </div>
    </div>
  );
}
