import { NextPage } from "next/types";
import Image from "next/image";
import Link from "next/link";

interface INavCard {
  title: string;
  descp: string;
  path: string;
}

const NavCard: NextPage<INavCard> = ({ title, descp, path }) => {
  return (
    <Link href={path} passHref>
      <a className="flex flex-1 overflow-hidden rounded-lg bg-[#1d1d1d] p-4 mb-8 shadow-lg h-[160px] max-w-[400px] sm:mr-8">
        <div className="icon-ctr mr-4">
          <Image
            src="/images/icon-tile.svg"
            width={64}
            height={64}
            alt="icon-nav"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label className="font-mono text-white text-base mb-4">{title}</label>
          <label className="font-mono text-white text-sm">{descp}</label>
        </div>
      </a>
    </Link>
  );
};

export default NavCard;
