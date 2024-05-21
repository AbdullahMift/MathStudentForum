// import { useState } from "react";

// function SideNav({ isActive, SetIsActive }) {
//   // const [isActive, SetIsActive] = useState("ballina");
//   const [VitetIsActive, SetVitetIsActive] = useState(false);
//   return (
//     <div class="transition ease-in-out w-[346px] h-screen px-5 bg-[#fafafa] border-r-[1px] border-r-[solid] border-r-[#b2b2b2] flex-col justify-start  inline-flex pt-[15px]">
//       <div
//         className={`w-[100%] h-[52px] pl-12 pr-[115px] [transition:all_0.3s_ease-out] py-3.5 rounded-2xl justify-start items-center inline-flex ${
//           isActive === `ballina`
//             ? "bg-purple-700 bg-opacity-20"
//             : "hover:bg-[#acacac] hover:bg-opacity-20"
//         }`}
//         onClick={() => SetIsActive("ballina")}
//       >
//         <p class="text-center select-none text-black text-[23px] font-semibold font-['Montserrat'] cursor-pointer">
//           Ballina
//         </p>
//       </div>
//       <div
//         className={`self-stretch h-[52px] pl-12 pr-[115px] py-3.5 rounded-2xl flex-col justify-start items-center gap-2.5 ${
//           isActive === `Vitet`
//             ? "bg-purple-700 bg-opacity-20"
//             : "hover:bg-[#acacac] hover:bg-opacity-20"
//         }`}
//         onClick={() => {
//           SetVitetIsActive((curr) => !curr);
//           SetIsActive("Vitet");
//         }}
//       >
//         <div
//           className="self-stretch [transition:all_0.3s_ease-in] flex items-center h-[100%]"
//           //   onClick={() => }
//         >
//           <p class="flex text-center select-none text-black text-[23px] pr-[15px] font-semibold font-['Montserrat'] cursor-pointer">
//             Vitet
//           </p>

//           <svg
//             width="15"
//             height="25"
//             viewBox="0 0 66 38"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className={`transition ease-in-out delay-30 ${
//               VitetIsActive ? `rotate-180` : ``
//             }`}
//           >
//             <path
//               d="M4.5 4.75L33 33.25L61.5 4.75"
//               stroke="black"
//               stroke-width="7"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//       {VitetIsActive ? (
//         <div className="self-stretch py-2 rounded-2xl pl-[20px] flex-col justify-start items-center [transition:all_0.3s_ease-out]">
//           <div
//             className={`width-[200px] [transition:all_0.3s_ease-out] h-[42px] pl-[50px] justify-start items-center gap-2.5 flex rounded-2xl  ${
//               isActive === `Viti 1`
//                 ? "bg-purple-700 bg-opacity-20"
//                 : "hover:bg-[#acacac] hover:bg-opacity-20"
//             }`}
//             onClick={() => SetIsActive("Viti 1")}
//           >
//             <p className="text-black select-none text-[21px] font-semibold font-['Montserrat'] cursor-pointer">
//               Viti 1
//             </p>
//           </div>

//           <div
//             className={`width-[200px] [transition:all_0.3s_ease-out] h-[42px] pl-[50px] justify-start items-center gap-2.5 flex rounded-2xl ${
//               isActive === `Viti 2`
//                 ? "bg-purple-700 bg-opacity-20"
//                 : "hover:bg-[#acacac] hover:bg-opacity-20"
//             }`}
//             onClick={() => SetIsActive("Viti 2")}
//           >
//             <p className="text-black select-none text-[21px] font-semibold font-['Montserrat'] cursor-pointer">
//               Viti 2
//             </p>
//           </div>

//           <div
//             className={`width-[200px] [transition:all_0.3s_ease-out] h-[42px] pl-[50px] justify-start items-center gap-2.5 flex rounded-2xl ${
//               isActive === `Viti 3`
//                 ? "bg-purple-700 bg-opacity-20"
//                 : "hover:bg-[#acacac] hover:bg-opacity-20"
//             }`}
//             onClick={() => SetIsActive("Viti 3")}
//           >
//             <p className="text-black select-none text-[21px] font-semibold font-['Montserrat'] cursor-pointer">
//               Viti 3
//             </p>
//           </div>

//           <div
//             className={`width-[200px] [transition:all_0.3s_ease-out] h-[42px] pl-[50px] justify-start items-center gap-2.5 flex rounded-2xl ${
//               isActive === `Viti 4`
//                 ? "bg-purple-700 bg-opacity-20"
//                 : "hover:bg-[#acacac] hover:bg-opacity-20"
//             }`}
//             onClick={() => SetIsActive("Viti 4")}
//           >
//             <p className="text-black select-none text-[21px] font-semibold font-['Montserrat'] cursor-pointer">
//               Viti 4
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// }

// export default SideNav;

import { NavLink } from "react-router-dom";

function SideNav({ VitetIsActive, SetVitetIsActive, isActive, SetIsActive }) {
  return (
    <div className="transition-transform w-[346px] h-screen fixed px-5 bg-[#fafafa] border-r-[1px] border-r-[solid] border-r-[#b2b2b2] flex-col justify-start  inline-flex pt-[15px]">
      <NavLink
        to="/"
        className={`w-[100%] h-[52px] pl-12 pr-[115px] [transition:all_0.3s_ease-out] py-3.5 rounded-2xl justify-start items-center inline-flex ${
          isActive === `ballina`
            ? "bg-purple-700 bg-opacity-20"
            : "hover:bg-[#acacac] hover:bg-opacity-20"
        }`}
        onClick={() => SetIsActive("ballina")}
      >
        <p className="text-center select-none text-black text-[23px] font-semibold font-['Montserrat'] cursor-pointer">
          Ballina
        </p>
      </NavLink>

      <div
        className={`self-stretch h-[52px] pl-12 pr-[115px] py-3.5 rounded-2xl flex-col justify-start items-center gap-2.5 ${
          isActive === `Vitet`
            ? "bg-purple-700 bg-opacity-20"
            : "hover:bg-[#acacac] hover:bg-opacity-20"
        }`}
        onClick={() => {
          SetVitetIsActive((curr) => !curr);
          SetIsActive("Vitet");
        }}
      >
        <div className="self-stretch [transition:all_0.3s_ease-in] flex items-center h-[100%]">
          <p class="flex text-center select-none text-black text-[23px] pr-[15px] font-semibold font-['Montserrat'] cursor-pointer">
            Vitet
          </p>

          <svg
            width="15"
            height="25"
            viewBox="0 0 66 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition ease-in-out delay-30 ${
              VitetIsActive ? `rotate-180` : ``
            }`}
          >
            <path
              d="M4.5 4.75L33 33.25L61.5 4.75"
              stroke="black"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {VitetIsActive ? (
        <div className="self-stretch py-2 rounded-2xl pl-[20px] flex-col justify-start items-center [transition:all_0.3s_ease-out]">
          {/* Add NavLink components for sub-items */}
          <NavLink
            to="/viti1"
            className={`width-[200px] [transition:all_0.3s_ease-out] h-[42px] pl-[50px] justify-start items-center gap-2.5 flex rounded-2xl  ${
              isActive === `Viti 1`
                ? "bg-purple-700 bg-opacity-20"
                : "hover:bg-[#acacac] hover:bg-opacity-20"
            }`}
            onClick={() => SetIsActive("Viti 1")}
          >
            <p className="text-black select-none text-[21px] font-semibold font-['Montserrat'] cursor-pointer">
              Viti 1
            </p>
          </NavLink>

          <NavLink
            to="/viti2"
            className={`width-[200px] [transition:all_0.3s_ease-out] h-[42px] pl-[50px] justify-start items-center gap-2.5 flex rounded-2xl  ${
              isActive === `Viti 2`
                ? "bg-purple-700 bg-opacity-20"
                : "hover:bg-[#acacac] hover:bg-opacity-20"
            }`}
            onClick={() => SetIsActive("Viti 2")}
          >
            <p className="text-black select-none text-[21px] font-semibold font-['Montserrat'] cursor-pointer">
              Viti 2
            </p>
          </NavLink>

          <NavLink
            to="/viti3"
            className={`width-[200px] [transition:all_0.3s_ease-out] h-[42px] pl-[50px] justify-start items-center gap-2.5 flex rounded-2xl  ${
              isActive === `Viti 3`
                ? "bg-purple-700 bg-opacity-20"
                : "hover:bg-[#acacac] hover:bg-opacity-20"
            }`}
            onClick={() => SetIsActive("Viti 3")}
          >
            <p className="text-black select-none text-[21px] font-semibold font-['Montserrat'] cursor-pointer">
              Viti 3
            </p>
          </NavLink>
          <NavLink
            to="/viti4"
            className={`width-[200px] [transition:all_0.3s_ease-out] h-[42px] pl-[50px] justify-start items-center gap-2.5 flex rounded-2xl  ${
              isActive === `Viti 4`
                ? "bg-purple-700 bg-opacity-20"
                : "hover:bg-[#acacac] hover:bg-opacity-20"
            }`}
            onClick={() => SetIsActive("Viti 4")}
          >
            <p className="text-black select-none text-[21px] font-semibold font-['Montserrat'] cursor-pointer">
              Viti 4
            </p>
          </NavLink>
          {/* Add NavLink components for other sub-items */}
          {/* ... */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SideNav;
