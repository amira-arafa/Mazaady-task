import Button from "../../_sharedComponents/Button/Button";
import Tab from "../../_sharedComponents/Tabs/Tab";
import ProductCard from "../../_sharedComponents/ProductCard/ProductCard";

export default function ProductsList() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 xl:col-span-8 flex gap-10 mb-md xl:justify-start justify-between">
          <Tab text="Products" isActive={true} />
          <Tab text="Articles" isActive={false} />
          <Tab text="Reviews" isActive={false} />
        </div>
        <div className="hidden xl:block col-span-4 justify-self-end">
          <Button
            className="text-sm"
            icon="/assets/add_icon.svg"
            text="Add Review"
          />
        </div>
      </div>
      <p className="font-nunito xl:text-xxl text-xl font-extrabold flex items-center text-black">
        Products
        <span className="text-gray text-sm font-normal ml-8">(12)</span>
      </p>
      <div>
        <ProductCard
          imgSrc="/assets/product_1.png"
          status="Live auction"
          statusColor="bg-darkRed"
          title="Six-piece clothing set (blouse - pants - hat)"
          price="1000 EGP"
          lots={["2", "10"]}
          isFav={false}
        />
        <ProductCard
          imgSrc="/assets/product_2.svg"
          status="Live auction"
          statusColor="bg-darkRed"
          title="Six-piece clothing set (blouse - pants - hat)"
          price="1000 EGP"
          lots={["2", "10"]}
          isFav={false}
        />
        <ProductCard
          imgSrc="/assets/product_3.svg"
          status="Hot sale"
          statusColor="bg-orange"
          title="Six-piece clothing set (blouse - pants - hat)"
          price="1000 EGP"
          lots={["2", "10"]}
          isFav={true}
        />
        <ProductCard
          imgSrc="/assets/product_4.svg"
          status="Live auction"
          statusColor="bg-darkRed"
          title="Six-piece clothing set (blouse - pants - hat)"
          price="1000 EGP"
          lots={["2", "10"]}
          isFav={false}
        />
        <ProductCard
          imgSrc="/assets/product_1.png"
          status="Live auction"
          statusColor="bg-darkRed"
          title="Six-piece clothing set (blouse - pants - hat)"
          price="1000 EGP"
          lots={["2", "10"]}
          isFav={true}
        />
      </div>
    </>
  );
}
