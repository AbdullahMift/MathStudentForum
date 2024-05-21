import React, { useState } from "react";
import SideNav from ".././Components/SideNav/SideNav";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function DetyraDetails({
  VitetIsActive,
  SetVitetIsActive,
  sidebarIsActive,
  setSidebarIsActive,
  isActive,
  SetIsActive,
}) {
  const location = useLocation();
  const detyra = location.state;

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

        <div className="h-screen flex items-center ml-[346px] w-[100%] pt-[30px] flex-col flex-wrap">
          <div>
            <div className="py-[20px] px-[80px] border-b-[4px] flex justify-center">
              <p className="text-[45px] font-[Montserrat] font-semibold">
                Detyra {detyra.detyra}
              </p>
            </div>
            <div className="flex flex-row py-[30px]">
              <p className="text-[30px] font-[Montserrat] px-[40px] font-semibold border-r-[4px]">
                <span className="font-medium">Kapitulli </span>
                {detyra.kapitulli}
              </p>
              <p className="text-[30px] font-[Montserrat] px-[40px] font-semibold border-r-[4px]">
                <span className="font-medium">Faqe </span> {detyra.faqe}
              </p>
              <p className="text-[30px] font-[Montserrat] px-[40px] font-semibold ">
                <span className="font-medium">
                  {detyra.skripta.id % 2 === 0 ? "Libri " : "Përmbledhja "}
                </span>
                {detyra.skripta.titulli}
              </p>
            </div>
            <div className="flex flex-row py-[30px] items-center">
              <p className="text-[30px] font-[Montserrat] px-[30px] font-semibold ">
                <span className="font-medium">Përshkrimi i detyrës: </span>
              </p>
              <div className="h-[100%] bg-[#eaeaea] rounded-lg">
                <p className="text-[30px] font-['Noto_Serif'] px-[40px] py-[8px] font-medium">
                  {detyra.pershkrimi !== "" ? detyra.pershkrimi : "/"}
                </p>
              </div>
            </div>
            <div className="flex flex-row py-[30px] items-center">
              <p className="text-[30px] font-[Montserrat] px-[30px] font-semibold ">
                <span className="font-medium">Kërkimi i detyrës: </span>
              </p>
              <div className="h-[100%] bg-[#eaeaea] rounded-lg">
                <p className="text-[30px] font-['Noto_Serif'] px-[40px] py-[8px] font-medium">
                  {detyra.kerkimiDetyres !== "" ? detyra.kerkimiDetyres : "/"}
                </p>
              </div>
            </div>
            <div className="flex flex-col py-[20px]">
              <p className="text-[30px] font-[Montserrat] px-[30px] py-[10px] font-semibold ">
                <span className="font-medium">Zgjidhja: </span>
              </p>
              <div className="py-[30px] px-[30px] rounded-[30px] bg-[#eaeaea] gap-8 flex">
                {detyra.image.map((image, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-2 left-2 font-[Montserrat] h-[40px] w-[40px] flex items-center justify-center text-white font-bold rounded-[50%] bg-[#6A00D3]">
                      {index + 1}
                    </div>
                    <a href={image} target="_blank">
                      <img
                        src={image}
                        className="max-h-[900px]"
                        alt={`taskImage-${index}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetyraDetails;
