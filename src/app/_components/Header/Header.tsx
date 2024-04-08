import Button from "@/app/_sharedComponents/Button/Button";
import "./Header.css";

export default function Header() {
  return (
    <div className="xl:px-wrapLg px-16 xl:py-sm py-8 font-nunito">
      <div className="grid grid-cols-12  items-center">
        <div className="col-span-6 flex  items-center">
          <div className="xl:hidden block mr-4">
            <img src="assets/menu.svg"></img>
          </div>
          <div>
            <img className="mr-lg" src="/assets/logo.png"></img>
          </div>
          <div className="hidden xl:block">
            <ul className="flex items-center">
              <li
                className={
                  "mr-30 cursor-pointer text-md font-bold text-darkRed header_active_item"
                }
              >
                Home
              </li>
              <li className="mr-30 cursor-pointer text-md font-normal text-gray">
                Blog
              </li>
              <li className="mr-30 cursor-pointer text-md font-normal text-gray">
                Gifts
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-6 justify-self-end flex items-center">
          <div className="xl:border-r border-solid border-pink">
            <img className="xl:pr-md pr-16" src="assets/search.svg"></img>
          </div>

          <div className="xl:border-r border-solid border-pink xl:pl-md pl-0">
            <img className="xl:pr-md pr-16" src="assets/notification.svg"></img>
          </div>
          <div className="xl:px-md px-0 ">
            <img className="w-md xl:w-40" src="assets/profile.svg"></img>
          </div>
          <div className="mr-lg hidden xl:block">
            <Button text="Add New Product" />
          </div>
          <div className="hidden xl:block pr-9 border-r border-solid border-ligthGray">
            <img src="assets/global.svg"></img>
          </div>
          <div className="hidden xl:block mr-9 pl-9">EN</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
