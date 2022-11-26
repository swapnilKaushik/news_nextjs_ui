import Header from "./Header";
import SideNavigation from "./SideNavigation";

export default function DefaultLayout(props) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <SideNavigation />
        </div>
        <div className="col-span-11">
          <Header />
          <div className="p-4">{props.children}</div>
        </div>
      </div>
    </>
  );
}
