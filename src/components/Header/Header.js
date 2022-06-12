import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <h1 className="btn btn-ghost normal-case text-xl">electroBABA</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <p>Home</p>
          </li>
          <li tabindex="0">
            <p>
              Shop
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
            <ul className="p-2 bg-base-100">
              <li>
                <p>Electronics</p>
              </li>
              <li>
                <p>Craft Items</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Manage Orders</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
