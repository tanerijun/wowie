import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-24 text-center text-gray-100 sm:rounded-md sm:border">
        <p>Oops! Something went wrong</p>
        <Link href="/">
          <a className="underline">Go back</a>
        </Link>
      </div>
    </div>
  );
}
