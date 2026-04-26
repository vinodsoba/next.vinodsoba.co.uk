"use client";

import TopNavigation from "../topnavigation/TopNavigation";

function Navigation({ menuItems = [], mobile = false }) {
  return (
    <div className="flex items-center justify-start">
      <TopNavigation menuItems={menuItems} mobile={mobile} />
    </div>
  );
}

export default Navigation;