import Link from 'next/link';
import Image from 'next/image';
import imageSource from '../../../public/data-span-logo.png'

export default function SideNav() {
  return (
    <nav className=" h-full flex-col px-8 py-4  border-green-500 border-solid border bg-white">

      <div
        className="mb-2 h-full border border-solid border-gray-300 rounded-lg p-4 "
      >
        <Image src={imageSource}
          width={242}
          height={65}
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <p className="font-semibold text-gray-800 mt-12">Classes filters</p>
      </div>
    </nav>
  );
}

