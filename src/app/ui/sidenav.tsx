import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className=" h-full flex-col px-3 py-4  border-green-500 border-solid border bg-yellow-950">
      <div
        className="mb-2 flex h-full rounded-md bg-blue-600 p-4 "
      > logo
        <div className="w-32 text-white md:w-40">
          text 2
        </div>
      </div>
    </nav>
  );
}
