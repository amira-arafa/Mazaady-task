type TabProps = {
  text: string;
  isActive: boolean;
};
export default function Tab({ text, isActive }: TabProps) {
  return (
    <>
      <div
        role="tab"
        className={`xl:px-27 px-25 py-8 font-nunito text-xs font-normal border rounded-14 border-solid cursor-pointer flex items-center ${isActive ? "border-orange text-orange bg-ligthOrange" : "border-ligthGray text-gray"}`}
      >
        <p>{text}</p>
      </div>
    </>
  );
}
