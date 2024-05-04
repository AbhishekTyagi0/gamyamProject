import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navButtons = [
    {
      id: 1,
      label: "City Lands",
    },
    {
      id: 2,
      label: "All Lands",
    },
    {
      id: 3,
      label: "Services",
    },
    {
      id: 4,
      label: "Testimonials",
    },
    {
      id: 5,
      label: "Premium",
    },
  ];

  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="w-full fixed top-0 z-10 flex justify-between items-center md:p-6 px-12 shadow-lg mb-12 bg-slate-100">
      <h1 className="text-3xl font-bold text-gray-400 max-md:py-6">
        <span className="text-black">
          <span className="bg-yellow-400">1a</span>cre
        </span>
        .in
      </h1>
      <div className="flex space-x-16 max-md:hidden">
        {navButtons.map((button) => (
          <button
            key={button.id}
            className="text-gray-400 text-xl hover:text-black font-semibold "
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="flex space-x-4 max-md:hidden">
        <button className="hover:shadow-md  text-black font-semibold rounded-3xl bg-yellow-400 p-3">
          Sell Your Land
        </button>
        <button className="hover:shadow-md  text-black font-semibold rounded-3xl bg-yellow-400 p-3">
          Account &rarr;
        </button>
      </div>
      <div className="md:hidden">
        <GiHamburgerMenu
          className="text-3xl cursor-pointer z-200"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {showMenu && (
        <div className="h-full w-[50%] left-0 fixed top-0 bg-white">
          <div className="w-full md:hidden p-3  flex flex-col items-end justify-end gap-4">
            {navButtons.map((button) => (
              <button
                key={button.id}
                className="text-gray-400 p-4 text-xl hover:text-black text-start font-semibold w-full"
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className="flex space-x-4 md:hidden">
            <button className="hover:shadow-md  text-black font-semibold rounded-3xl bg-yellow-400 p-3">
              Sell Your Land
            </button>
            <button className="hover:shadow-md  text-black font-semibold rounded-3xl bg-yellow-400 p-3">
              Account &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
