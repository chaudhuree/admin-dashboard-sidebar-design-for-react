import React, { useEffect, useRef, useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function NavSidebarLayout() {
  const [isSidePanelVisible, setIsSidePanelVisible] = useState(true);
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(true);

  // with screen resize sidebar show hide functionality
  useEffect(() => {
    const handleResponsiveSidePanel = () => {
      const w = window.innerWidth;
      if (w >= 1200) {
        setIsSidePanelVisible(true);
      } else {
        setIsSidePanelVisible(false);
      }
    };
    handleResponsiveSidePanel();
    window.addEventListener("resize", handleResponsiveSidePanel);
    return () => {
      window.removeEventListener("resize", handleResponsiveSidePanel);
    };
  }, []);

  // references
  let sidePanelref,
    searchBoxRef = useRef();

  // sidebar toggler for small screen
  const SidebarClickHandler = () => {
    let sidePanel = sidePanelref;
    if (sidePanel.classList.contains("sidepanel-visible")) {
      // console.log("visible");
      sidePanel.classList.remove("sidepanel-visible");
      sidePanel.classList.add("sidepanel-hidden");
    } else {
      // console.log("hidden");
      sidePanel.classList.remove("sidepanel-hidden");
      sidePanel.classList.add("sidepanel-visible");
    }
  };
  // searchbox toggler for mobile screen
  const SearchMobileTriggerHandler = () => {
    let searchBox = searchBoxRef;

    if (searchBox.classList.contains("is-visible")) {
      searchBox.classList.remove("is-visible");
    } else {
      searchBox.classList.add("is-visible");
    }

    setIsSearchBoxVisible(!isSearchBoxVisible);
  };
  return (
    <header className="app-header fixed-top">
      <Navbar
        isSearchBoxVisible={isSearchBoxVisible}
        setIsSearchBoxVisible={setIsSearchBoxVisible}
        SidebarClickHandler={SidebarClickHandler}
        SearchMobileTriggerHandler={SearchMobileTriggerHandler}
      />
      <div
        ref={(div) => (sidePanelref = div)}
        id="app-sidepanel"
        className={
          isSidePanelVisible
            ? "sidepanel-visible app-sidepanel"
            : "sidepanel-hidden app-sidepanel"
        }
      >
        <Sidebar SidebarClickHandler={SidebarClickHandler} />
      </div>
    </header>
  );
}
