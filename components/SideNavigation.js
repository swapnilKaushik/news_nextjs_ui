import Link from "next/link";
import SideNavLinks from "../constants/SideNavLinks";

const SideNavigation = () => {
  return (
    <div className="h-screen flex flex-col flex-1 items-center bg-secondary-bg-color">
      <Link
        href="/"
        className="h-[80px] w-full flex items-center justify-center"
      >
        <div>☰</div>
      </Link>
      {SideNavLinks.map(({ title, href }, index) => {
        return (
          <Link
            key={index}
            href={href}
            className="h-[80px] w-full flex items-center justify-center"
            style={index === 1 ? { backgroundColor: "#FF5E15" } : {}}
          >
            <div>{title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavigation;
