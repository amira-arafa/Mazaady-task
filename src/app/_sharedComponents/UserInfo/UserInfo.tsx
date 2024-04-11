type UserInfoProps = {
  icon: string;
  number: number;
  text: string;
};
export default function UserInfo({ icon, number, text }: UserInfoProps) {
  return (
    <div className="col-span-4 flex bg-ligthOrange gap-4 rounded-18 xxl:p-sm p-8 items-center">
      <div className=" w-[22px] h-[22px]">
        <img src={icon}></img>
      </div>
      <div className="leading-tight">
        <div className="font-nunito font-bold text-sm text-black">{number}</div>
        <div className="font-nunito font-normal text-xs text-orange">
          {text}
        </div>
      </div>
    </div>
  );
}
