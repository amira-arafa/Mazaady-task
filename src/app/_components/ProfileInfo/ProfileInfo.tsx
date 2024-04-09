import Button from "@/app/_sharedComponents/Button/Button";
import UserInfo from "@/app/_sharedComponents/UserInfo/UserInfo";

export default function ProfileInfo() {
  return (
    <>
      <div className="mb-8 xl:mb-16">
        <img src="assets/profile_img.svg" />
      </div>
      <div>
        <p className="font-nunito font-bold xl:text-xl text-md mb-4 xl:mb-11 text-darkGray">
          Hala Ahmed
        </p>
      </div>
      <div className="font-nunito text-normalGray font-sm text-sm mb-16 xl:mb-md">
        <p>
          I am Hala Ahmed, I am the owner of the local brand called Beauty which
          is for Mackeup and Skin Care.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-17 xl:gap-10 st:gap-17 xl:mb-md mb-16">
        <UserInfo icon="/assets/user_tick.svg" text="Following" number={5} />
        <UserInfo icon="/assets/user.svg" text="Followers" number={20} />
        <UserInfo icon="/assets/star.svg" text="Rate" number={4.2} />
      </div>
      <div>
        <Button className="w-full flex text-st justify-center" text="Follow" />
      </div>
    </>
  );
}
