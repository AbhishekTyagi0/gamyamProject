import { RxDotFilled } from "react-icons/rx";
import Carousels from "../Utils/Carousel";
import { Calculate } from "../Utils/helper";
import icon1 from "../assets/icon1.png";
import { BsCurrencyRupee } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";
import Spinner from "../Utils/Spinner";

interface LandProps {
  LandItem: any;
}

const Land: React.FC<LandProps> = (props: LandProps) => {
  const { LandItem } = props;
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState<any[]>(LandItem.results || []);

  const loadFunc = async () => {
    try {
      const response = await fetch(
        `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${
          page + 1
        }&page_size=10`,
        {
          mode: "cors",
        }
      );
      if (!response.ok) {
        throw new Error(`This is an HTTP Error: The error is ${response}`);
      }
      const data = await response.json();
      const uniqueProducts = [...new Set([...products, ...data.results])];
      setProducts(uniqueProducts);

      setPage((prevPage) => prevPage + 1);
      setHasMore(data.next !== null);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={hasMore}
      loader={
        <div className="loader" key={`loader-${products.length}`}>
          <Spinner />
        </div>
      }
    >
      <div className="px-8 mt-32 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products &&
          products.map((item: any) => (
            <div
              key={item.id}
              className="w-[340px] lg:w-[400px] h-[300px] shadow-md hover:shadow-lg"
            >
              {item.land_media && (
                <Carousels
                  slides={item.land_media.map((media: any) => media.image)}
                />
              )}
              <div className="flex flex-col justify-between p-4">
                <div className="flex">
                  <p className="font-bold text-xl">{item.village_name}, </p>
                  <p className="font-bold ml-1 text-xl">{item.mandal_name}</p>
                  <img src={icon1} alt="icon" className="w-7 ml-8" />
                </div>
                <div className="flex font-bold text-lg">
                  {item.district_name}(dt)
                </div>
              </div>
              <div className="flex px-4">
                <div className="flex font-semibold text-md gap-1">
                  {!!item.total_land_size_in_acres.acres && (
                    <>
                      {item.total_land_size_in_acres.acres}
                      <span> Acres</span>
                    </>
                  )}
                  {!!item.total_land_size_in_acres.guntas && (
                    <>
                      {item.total_land_size_in_acres.guntas}
                      <span> Guntas</span>
                    </>
                  )}
                </div>
                <p className="mt-1">
                  <RxDotFilled />
                </p>
                <p className="mt-1">
                  <BsCurrencyRupee />
                </p>
                <div>
                  {Calculate(
                    item.price_per_acre_crore.crore,
                    item.price_per_acre_crore.lakh
                  )}
                  {!item.price_per_acre_crore.crore ? (
                    <span> lakhs per acre</span>
                  ) : (
                    <span> crores per acre</span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </InfiniteScroll>
  );
};

export default Land;
