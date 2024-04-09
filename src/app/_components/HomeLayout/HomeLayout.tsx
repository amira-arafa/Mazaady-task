import ProfileInfo from "../ProfileInfo/ProfileInfo";

export default function HomeLayout() {
  return (
    <div className="bg-mainGray p-16 xl:px-84 xl:py-48 grid grid-cols-12 xl:gap-25">
      <div className="xl:col-span-4 col-span-12">
        <div className="mb-md xl:p-md p-16 bg-white xl:rounded-21 rounded-24">
          <ProfileInfo />
        </div>
        <div className="mb-md"></div>
      </div>
      <div className="col-span-4"></div>
    </div>
  );
}
