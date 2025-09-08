import React from "react";
import { Outlet } from "react-router-dom";

const CategoryLayout = ({ defaultTitle = "Health & Wellness Categories" }) => {
  return (
    <div className="px-6 max-w-7xl mx-auto py-16">
      <Outlet
        context={{
          defaultTitle,
        }}
      />
    </div>
  );
};

export default CategoryLayout;





