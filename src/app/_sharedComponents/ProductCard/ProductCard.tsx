type ProductCardProps = {
  imgSrc: string;
  status: string;
  statusColor: string;
  title: string;
  price: string;
  lots: string[];
  isFav: boolean;
};
const labels = ["Days", "Hours", "Minutes"];
export default function ProductCard({
  imgSrc,
  status,
  statusColor,
  title,
  price,
  lots,
  isFav,
}: ProductCardProps) {
  return (
    <div className="grid grid-cols-12 p-8 pb-lg">
      <div className="xl:col-span-10 col-span-12 flex">
        <div className="xl:mr-16 mr-8">
          <img className="xl:min-w-[150px] min-w-[115px]" src={imgSrc}></img>
          <div className="relative">
            <div
              className={`${statusColor} xl:w-[119px] w-[84px] rounded-ee-31 rounded-ss-31 absolute bottom-n1 left-31 flex justify-center py-8 font-nunito font-normal text-white text-xs`}
            >
              {status}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <div className="font-nunito font-normal xl:text-md text-xs text-black">
            {title}
          </div>
          <div className="font-nunito flex items-center">
            <span className="font-normal xl:text-md text-xs text-gray mr-6">
              Starting Price
            </span>
            <span className="font-bold xl:text-xl text-xs text-black">
              {price}
            </span>
          </div>
          <div className="flex flex-wrap">
            <span className="font-normal xl:text-md text-xs text-gray mr-6">
              Lot starts in
            </span>
            <div className="flex gap-16">
              {lots.map((lot, index) => (
                <div
                  key={index}
                  className="font-nunito bg-ligthOrange font-bold  text-orange px-6 px-md rounded-24"
                >
                  <span className="xl:text-lg text-xs">{lot}</span>
                  <span className="xl:text-sm text-xxs"> {labels[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 justify-self-end cursor-pointer hidden xl:block">
        <img src={isFav ? "/assets/fav_red.svg" : "/assets/fav.svg"}></img>
      </div>
    </div>
  );
}
