import { Link } from "react-router-dom";

function DetyraItem({
  key,
  id,
  detyra,
  skripta,
  faqe,
  image,
  imageLength,
  viti,
  detyraObj,
}) {
  console.log("detyraObj", detyraObj);
  return (
    <Link to={`/${viti}/detyra${id}`} state={detyraObj}>
      <div
        className="w-[820px] h-[300px] my-4 bg-[white] border-[2px] rounded-[30px] flex flex-row justify-around items-center hover:border-[darkgray]"
        key={key}
      >
        <div>
          <div className="w-[320px] h-[180px] bg-[#F3F3F3] rounded-[15px] px-4 pt-1">
            <p className="text-[36px]  font-[Montserrat] font-semibold ">
              Detyra {detyra}
            </p>
            <p className="text-[20px] font-[Montserrat] font-medium">
              {skripta.titulli}
            </p>
            <p className="text-[18px] font-[Montserrat] font-regular pt-1">
              Faqe: {faqe}
            </p>
          </div>
          <div className="flex flex-row justify-between  pt-2">
            <div className="bg-[#00B728] py-1 px-3 rounded-[10px]">
              <p className="text-[13px] text-[white] font-[Montserrat] font-semibold">
                Abdullah Miftari
              </p>
            </div>
            {/* <div className="bg-[#6A00D3] py-1 px-3 rounded-[10px]">
              <p className="text-[13px] text-[white] font-[Montserrat] font-semibold">
                Verified
              </p>
            </div> */}
          </div>
        </div>
        <div>
          <div className="w-[320px] h-[250px] border-dotted border-2 border-black h0 rounded-[15px] relative flex items-center">
            {/* Only Testing with storage link */}
            <img
              className="h-[100%] w-[100%] object-cover rounded-[15px]"
              src={image}
              alt=""
            />
            <div className="h-[30px] w-[50px] bg-[#6A00D3] flex justify-center items-center rounded-xl absolute top-1 right-1">
              <p className="text-white">1/{imageLength}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DetyraItem;
