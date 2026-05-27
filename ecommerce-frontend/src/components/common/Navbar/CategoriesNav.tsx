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
      <ul className="flex items-center justify-around">
        {categories.map((cat) => (
          <li className="font-serif">{cat.name}</li>
        ))}
      </ul>
    </>
  );
}

export default CategoriesNav;
