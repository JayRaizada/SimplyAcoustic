import React, { useState } from "react";

const NavMenu = ({ toggleMenu }) => {
  return (
    <div className="relative">
      <button
        id="globalnav-menutrigger-button"
        aria-controls="globalnav-list"
        aria-label="Menu"
        data-topnav-menu-label-open="Menu"
        data-topnav-menu-label-close="Close"
        data-topnav-flyout-trigger-compact="menu"
        className="globalnav-menutrigger-button p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg width="18" height="18" viewBox="0 0 18 18">
          <polyline
            id="globalnav-menutrigger-bread-bottom"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="2 12, 16 12"
            className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
          >
            <animate
              id="globalnav-anim-menutrigger-bread-bottom-open"
              attributeName="points"
              keyTimes="0;0.5;1"
              dur="0.35s"
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
              values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
            />
            <animate
              id="globalnav-anim-menutrigger-bread-bottom-close"
              attributeName="points"
              keyTimes="0;0.5;1"
              dur="0.35s"
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
              values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
            />
          </polyline>
          <polyline
            id="globalnav-menutrigger-bread-top"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="2 5, 16 5"
            className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
          >
            <animate
              id="globalnav-anim-menutrigger-bread-top-open"
              attributeName="points"
              keyTimes="0;0.5;1"
              dur="0.35s"
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
              values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
            />
            <animate
              id="globalnav-anim-menutrigger-bread-top-close"
              attributeName="points"
              keyTimes="0;0.5;1"
              dur="0.35s"
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
              values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
            />
          </polyline>
        </svg>
      </button>
    </div>
  );
};

export default NavMenu;
