import Image from "next/image";
import Link from "next/link";
import HeaderLinks from "../constants/HeaderLinks";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-2 mx-12">
      <div className="font-serif">
        <Image src="/news.svg" width={90} height={50} alt="news.svg" />
      </div>
      <div className="flex bg-white">
        {HeaderLinks.map(({ title, href }, index) => {
          return (
            <Link key={index} href="/" className="p-5">
              <div>{title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
