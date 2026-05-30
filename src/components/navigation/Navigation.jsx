"use client";

import TopNavigation from "../topnavigation/TopNavigation";

function Navigation({ menuItems = [], mobile = false, setMenuOpen }) {
  return (
    <div className="flex items-center justify-start">
      <TopNavigation menuItems={menuItems} setMenuOpen={setMenuOpen} mobile={mobile} />
    </div>
  );
}

export default Navigation;