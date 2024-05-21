import React from "react";
import Logo from "../../Assets/StudentMathForum.png";
import { NavLink } from "react-router-dom";

function TopNav({ menuState, menuSetState }) {
  return (
    <div className="flex sticky top-0 justify-between h-[53px] w-[100%] bg-[#fafafa] border-b-[1px] border-b-[solid] border-b-[#b2b2b2]">
      <div className="flex justify-start w-[400px] items-center">
        <div
          className="pl-[30px]"
          onClick={() => {
            menuSetState((curr) => !curr);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="27"
            viewBox="0 0 448 512"
            className={`hover:fill-[grey] ${
              menuState ? `fill-[black]` : `fill-[grey]`
            }`}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <div className="pl-[40px]">
          <NavLink to="/">
            <img src={Logo} className="h-[30px]" alt="" />
          </NavLink>
        </div>
      </div>

      <div className="flex items-center [#fafafa] w-[200px] ">
        <div className="pl-[15px]">
          <NavLink to="/shtodetyr">
            <button className="flex justify-center items-center w-[37px] h-[37px] bg-[#6A00D3] rounded-[50%]  hover:bg-[#8740cf]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 13V1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </NavLink>
        </div>
        {/* <div className="pl-[15px]">
          <button className="flex justify-center items-center w-[37px] h-[37px] bg-[#6A00D3] rounded-[50%]  hover:bg-[#8740cf]">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1467 10.4642C11.055 10.455 10.945 10.455 10.8442 10.4642C8.66249 10.3909 6.92999 8.60337 6.92999 6.40337C6.92999 4.15754 8.74499 2.33337 11 2.33337C13.2458 2.33337 15.07 4.15754 15.07 6.40337C15.0608 8.60337 13.3283 10.3909 11.1467 10.4642Z"
                fill="white"
              />
              <path
                d="M6.56335 13.8466C4.34501 15.3316 4.34501 17.7516 6.56335 19.2275C9.08418 20.9141 13.2183 20.9141 15.7392 19.2275C17.9575 17.7425 17.9575 15.3225 15.7392 13.8466C13.2275 12.1691 9.09335 12.1691 6.56335 13.8466Z"
                fill="white"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default TopNav;
