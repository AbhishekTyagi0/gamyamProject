import React from "react";

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

  return (
    <div className="w-full fixed top-0 z-10 flex justify-between items-center p-6 px-12 shadow-lg mb-12 bg-slate-100">
      <h1 className="text-3xl font-bold text-gray-400">
        <span className="text-black">
          <span className="bg-yellow-400">1a</span>cre
        </span>
        .in
      </h1>
      <div className="flex space-x-16">
        {navButtons.map((button) => (
          <button
            key={button.id}
            className="text-gray-400 text-xl hover:text-black font-semibold "
          >
            {button.label}
          </button>
        ))}
      </div>

      <button className="hover:shadow-md  text-black font-semibold rounded-3xl bg-yellow-400 p-3">
        Sell Your Land
      </button>
      <button className="hover:shadow-md  text-black font-semibold rounded-3xl bg-yellow-400 p-3">
        Account &rarr;
      </button>
    </div>
  );
};

export default Navbar;
