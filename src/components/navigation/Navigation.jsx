"use client";

import TopNavigation from "../topnavigation/TopNavigation";

function Navigation({ menuItems = [], mobile = false, setMenuOpen }) {
  return (
    <div className={
      mobile
      ? "flex justify-start"
      : "flex justify-center w-full"
    }>
      <TopNavigation 
      menuItems={menuItems} 
      setMenuOpen={setMenuOpen} 
      mobile={mobile} />
    </div>
  );
}

export default Navigation;