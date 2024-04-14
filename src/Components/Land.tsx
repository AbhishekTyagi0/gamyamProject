import { RxDotFilled } from "react-icons/rx";
import Carousels from "../Utils/Carousel";
import { Calculate, Capitalize } from "../Utils/helper";
import icon1 from "../assets/icon1.png";
import { BsCurrencyRupee } from "react-icons/bs";

interface LandProps {
  LandItem: any;
}

const Land: React.FC<LandProps> = (props: LandProps) => {
  const { LandItem } = props;
  console.log("LandItem", LandItem);
  return (
    <div className="w-full grid grid-cols-3 gap-6 ">
      {LandItem.results &&
        LandItem.results.map((item: any) => (
          <div
            key={item.id}
            className="w-[400px] h-[400px] shadow-md hover:shadow-lg"
          >
            {item.land_media && (
              <Carousels
                slides={item.land_media.map((media: any) => media.image)}
              />
            )}
            <div>
              <div>
                <p>{item.village_name},</p>
                <p>{item.mandal_name}</p>
                <img src={icon1} alt="icon" className="w-7" />
              </div>
              <div>{item.district_name}(dt)</div>
            </div>
            <div>
              <div>
                {item.total_land_size_in_acres.acres}
                <span> Acres </span>
                {item.total_land_size_in_acres.guntas}
                <span> Guntas</span>
              </div>
              <p>
                <RxDotFilled />
              </p>
              <p>
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
  );
};

export default Land;
