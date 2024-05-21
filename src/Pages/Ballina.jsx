import React from "react";
import SideNav from ".././Components/SideNav/SideNav";
import { NavLink } from "react-router-dom";

function Ballina({
  VitetIsActive,
  SetVitetIsActive,
  sidebarIsActive,
  setSidebarIsActive,
  isActive,
  SetIsActive,
}) {
  return (
    <>
      <div className="flex flex-row ">
        {sidebarIsActive === true ? (
          <div>
            <SideNav
              VitetIsActive={VitetIsActive}
              SetVitetIsActive={SetVitetIsActive}
              isActive={isActive}
              SetIsActive={SetIsActive}
            />
          </div>
        ) : (
          <div className="[transition:all_0.3s_ease-out] h-screen fixed px-1 w-[80px] pt-[15px] bg-[#fafafa] border-r-[1px] border-r-[solid] border-r-[#b2b2b2]">
            <div
              onClick={() => {
                SetIsActive("ballina");
                setSidebarIsActive((curr) => !curr);
              }}
              className={`h-[52px] w-[100%] flex justify-center items-center rounded-[12px] ${
                isActive === `ballina` ? `bg-purple-700 bg-opacity-20` : ``
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 576 512"
                className="fill-[#626262]"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </div>
            <div
              onClick={() => {
                SetIsActive("Vitet");
                setSidebarIsActive((curr) => !curr);
              }}
              className={`h-[52px] w-[100%] flex justify-center items-center rounded-[12px] ${
                isActive === `Vitet` ||
                isActive === `Viti 1` ||
                isActive === `Viti 2` ||
                isActive === `Viti 3` ||
                isActive === `Viti 4`
                  ? `bg-purple-700 bg-opacity-20`
                  : ``
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="23"
                viewBox="0 0 640 512"
                className="fill-[#626262]"
              >
                <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
              </svg>
            </div>
          </div>
        )}

        <div className="h-screen flex justify-center ml-[346px] w-[100%] pt-[30px] flex-row flex-wrap">
          <NavLink
            onClick={() => SetVitetIsActive((curr) => !curr)}
            to="/viti1"
            className="w-[274px] h-[213px] bg-[#C5EAFF] rounded-[15px] ml-[1%] mr-[1%] mt-[30px] hover:bg-[#b5e0f8]"
          >
            <div className="h-[80%] rounded-[15px] flex justify-center items-center">
              <h1 className="text-[48px] font-[Montserrat] font-bold">
                Viti I
              </h1>
            </div>
            <div className="bg-[#90D7FF] h-[20%] w-[100%] rounded-b-[15px] flex items-center justify-end pr-[20px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 9.08337V14.5834C20 18.25 19 19.1667 15 19.1667H5C1 19.1667 0 18.25 0 14.5834V5.41671C0 1.75004 1 0.833374 5 0.833374H6.5C8 0.833374 8.33 1.23671 8.9 1.93337L10.4 3.76671C10.78 4.22504 11 4.50004 12 4.50004H15C19 4.50004 20 5.41671 20 9.08337Z"
                  fill="black"
                />
              </svg>
            </div>
          </NavLink>
          <NavLink
            to="/viti2"
            className="w-[274px] h-[213px] bg-[#C5CAFF] rounded-[15px] ml-[1%] mr-[1%] mt-[30px] hover:bg-[#b9befb]"
          >
            <div className="h-[80%] rounded-[15px] flex justify-center items-center">
              <h1 className="text-[48px] font-[Montserrat] font-bold">
                <a href="">Viti II</a>
              </h1>
            </div>
            <div className="bg-[#B2B1FC] h-[20%] w-[100%] rounded-b-[15px] flex items-center justify-end pr-[20px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 9.08337V14.5834C20 18.25 19 19.1667 15 19.1667H5C1 19.1667 0 18.25 0 14.5834V5.41671C0 1.75004 1 0.833374 5 0.833374H6.5C8 0.833374 8.33 1.23671 8.9 1.93337L10.4 3.76671C10.78 4.22504 11 4.50004 12 4.50004H15C19 4.50004 20 5.41671 20 9.08337Z"
                  fill="black"
                />
              </svg>
            </div>
          </NavLink>
          <NavLink
            to="/viti3"
            className="w-[274px] h-[213px] bg-[#F4E87D] rounded-[15px] ml-[1%] mr-[1%] mt-[30px] hover:bg-[#fff176]"
          >
            <div className="h-[80%] rounded-[15px] flex justify-center items-center">
              <h1 className="text-[48px] font-[Montserrat] font-bold">
                <a href="">Viti III</a>
              </h1>
            </div>
            <div className="bg-[#DACE67] h-[20%] w-[100%] rounded-b-[15px] flex items-center justify-end pr-[20px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 9.08337V14.5834C20 18.25 19 19.1667 15 19.1667H5C1 19.1667 0 18.25 0 14.5834V5.41671C0 1.75004 1 0.833374 5 0.833374H6.5C8 0.833374 8.33 1.23671 8.9 1.93337L10.4 3.76671C10.78 4.22504 11 4.50004 12 4.50004H15C19 4.50004 20 5.41671 20 9.08337Z"
                  fill="black"
                />
              </svg>
            </div>
          </NavLink>
          <NavLink
            to="/viti4"
            className="w-[274px] h-[213px] bg-[#FFC5D6] rounded-[15px] ml-[1%] mr-[1%] mt-[30px] hover:bg-[#fbb7cb]"
          >
            <div className="h-[80%] rounded-[15px] flex justify-center items-center">
              <h1 className="text-[48px] font-[Montserrat] font-bold">
                <a href="">Viti IV</a>
              </h1>
            </div>
            <div className="bg-[#FF9DBB] h-[20%] w-[100%] rounded-b-[15px] flex items-center justify-end pr-[20px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 9.08337V14.5834C20 18.25 19 19.1667 15 19.1667H5C1 19.1667 0 18.25 0 14.5834V5.41671C0 1.75004 1 0.833374 5 0.833374H6.5C8 0.833374 8.33 1.23671 8.9 1.93337L10.4 3.76671C10.78 4.22504 11 4.50004 12 4.50004H15C19 4.50004 20 5.41671 20 9.08337Z"
                  fill="black"
                />
              </svg>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Ballina;
