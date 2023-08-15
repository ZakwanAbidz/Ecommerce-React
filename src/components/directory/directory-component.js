import React from "react";
import CategoryItem from "../category-item/Category-item-component";

const Directory = ({ categories }) => {
  console.log("categories=======", categories);
  return (
    <div className="categories-container">
      {/* <img /> */}
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
