import React from "react";

function CategoriesNav() {
  // to use for Routing
  //      const categories = [
  //     { name: "New Arrivals", path: "/newArrivals" },
  //     { name: "Toys", path: "/toys" },
  //     { name: "Clothing", path: "/clothing" },
  //     { name: "Footwear", path: "/footwear" },
  //     { name: "School Supplies", path: "/school" },
  //     { name: "Baby Care", path: "/baby-care" },
  //     { name: "Offers", path: "/Offers" },

  //   ];
  const categories = [
    { name: "New Arrivals" },
    { name: "Toys" },
    { name: "Clothing" },
    { name: "Footwear" },
    { name: "School Supplies" },
    { name: "Baby Care" },
    { name: "Offers" },
  ];
  return (
    <>
      <ul className="flex items-center justify-around cursor-pointer border-t-2 border-b-2 py-3 border-gray-200">
        {categories.map((cat) => (
          <li className="font-sans font-medium active:text-pink-600 hover:text-pink-600">
            {cat.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoriesNav;
