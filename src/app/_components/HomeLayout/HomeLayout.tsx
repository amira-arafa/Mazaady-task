import ProductsList from "../ProductsList/ProductsList";
import FollowUs from "../ProfileFollowUs/FollowUs";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

export default function HomeLayout() {
  return (
    <div className="bg-mainGray p-16 xl:px-84 xl:py-48 grid grid-cols-12 xl:gap-25">
      <div className="xl:col-span-4 col-span-12">
        <div
          data-testid="profile-info"
          className="mb-md xl:p-md p-16 bg-white xl:rounded-21 rounded-24"
        >
          <ProfileInfo />
        </div>
        <div
          data-testid="follow-us"
          className="mb-md xl:p-md p-16 bg-white xl:rounded-21 rounded-24"
        >
          <FollowUs />
        </div>
      </div>
      <div
        data-testid="products-list"
        className="xl:col-span-8 col-span-12 xl:p-md p-16 bg-white xl:rounded-21 rounded-24"
      >
        <ProductsList />
      </div>
    </div>
  );
}
