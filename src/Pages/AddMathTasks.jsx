import { useState } from "react";
import cloudArrowUpIcon from "../Assets/cloud-arrow-up-solid.svg";
import AddFolderIcon from "../Assets/Add-folderIcon.svg";
import ArrowDropDownIcon from "../Assets/ArrowDropDownIcon.svg";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function AddMathTasks() {
  const [isActive, setIsActive] = useState("foto");
  const [dropdownActive, setDropdownActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [fileNames, setfileNames] = useState("Asnje foto e vendosur");
  const [currTab, setcurrTab] = useState(0);

  const navigate = useNavigate();

  console.log("just changed", currTab);

  const skriptat = [
    "MATEMATIKA_VITI_1",
    "Zbirka Zadaci Matematika Za I Godina",
    "MATEMATIKA_VITI_2",
    "Zbirka Zadaci Matematika Za II Godina",
    "MATEMATIKA_VITI_3",
    "Zbirka Zadaci Matematika Za III Godina",
    "MATEMATIKA_VITI_4",
    "Zbirka Zadaci Matematika Za IV Godina",
  ];

  const [detyra, setDetyra] = useState("");
  const [pershkrimi, setPershkrimi] = useState("");
  const [skripta, setSkripta] = useState({});
  const [kapitulli, setKapitulli] = useState(1);
  const [faqe, setFaqe] = useState(1);
  const [kerkimiDetyres, setKerkimiDetyres] = useState("");
  const [image, setImage] = useState([]);

  const submitHandler = () => {
    if (detyra !== "" && kapitulli > 0 && faqe > 0 && image.length > 0) {
      // const uploadImageToStorage = async (imageFile) => {
      //   const storageRef = ref(storage, `images/${imageFile.name}`);
      //   await uploadBytes(storageRef, imageFile);
      //   return getDownloadURL(storageRef);
      // };

      const uploadImageToStorage = async (imageFile) => {
        try {
          const storageRef = ref(
            storage,
            `images/detyra-${detyra}/${imageFile.name}`
          );

          const metadata = {
            contentType: imageFile.type,
          };

          await uploadBytes(storageRef, imageFile, metadata);
          const downloadURL = await getDownloadURL(storageRef);

          console.log("Image uploaded successfully:", downloadURL);

          return downloadURL;
        } catch (error) {
          console.error("Error uploading image:", error);
          throw error;
        }
      };

      Promise.all(image.map(uploadImageToStorage))
        .then((downloadURLs) => {
          let currDetyra = {
            detyra,
            pershkrimi,
            skripta,
            kapitulli,
            faqe,
            kerkimiDetyres,
            image: downloadURLs,
          };

          fetch(
            "https://mathstudentforum-default-rtdb.firebaseio.com/detyrat.json",
            {
              method: "POST",
              body: JSON.stringify(currDetyra),
            }
          ).then((response) => {
            if (response.ok) {
              alert("Detyra u shtua me sukses!");
              setDetyra("");
              setPershkrimi("");
              setKapitulli(1);
              setFaqe(1);
              setKerkimiDetyres("");
              setImage([]);
              // setImageUrls([]);
              // setFileNames("");
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.error("Error uploading images:", error);
          // Handle errors related to image upload
        });
    } else {
      alert("Please fill all the values!");
    }
  };
  function handleSelectedTab(index) {
    setcurrTab(index + 1);
    setDropdownActive((curr) => !curr);
  }

  function deleteImage() {
    setImage((prevImages) =>
      prevImages.filter((img, index) => index !== imageIndex)
    );
  }

  function handleKerkimiDetyres(event) {
    setKerkimiDetyres(event.target.value);
  }

  return (
    <>
      <div className="flex items-center w-[100%] pt-[30px] flex-col">
        <div>
          <h1 className="text-[45px] font-[Montserrat] font-bold pb-6">
            Shto detyrë
          </h1>
        </div>
        <div className="w-[40%] flex flex-col gap-1 pt-3">
          <label
            className="text-[20px] font-semibold font-[Montserrat]"
            htmlFor=""
          >
            Detyra: <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            className="h-[55px] border-[lightgray] border-[1px] font-[Montserrat] text-[25px] pl-3  focus:outline-none bg-[#eaeaea] rounded-[12px]"
            value={detyra}
            onChange={(event) => setDetyra(event.target.value)}
          />
        </div>
        <div className="w-[40%] flex flex-col gap-1 pt-3">
          <label
            className="text-[20px] font-semibold font-[Montserrat]"
            htmlFor=""
          >
            Përshkrimi:
          </label>
          <textarea
            className="pl-3 pt-1 border-[lightgray] border-[1px] text-[25px] font-[Montserrat] focus:outline-none bg-[#eaeaea] rounded-[12px]"
            name="Pershkrimi"
            value={pershkrimi}
            onChange={(event) => setPershkrimi(event.target.value)}
            cols="30"
            rows="3"
            placeholder="Zgjidh barazimet iracionale"
          ></textarea>
        </div>
        <div className="w-[40%] flex flex-col gap-1 pt-3">
          <label
            className="text-[20px] font-semibold font-[Montserrat]"
            htmlFor=""
          >
            Skripta (libri): <span className="text-[red]">*</span>
          </label>
          <div
            className="h-[55px] border-[lightgray] border-[1px] font-[Montserrat] text-[25px] flex items-center justify-between px-3  bg-[#eaeaea] rounded-[12px] select-none"
            onClick={() => setDropdownActive((curr) => !curr)}
          >
            <p>{skriptat[currTab - 1]}</p>
            <svg
              width="15"
              height="25"
              viewBox="0 0 66 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition ease-in-out delay-30 ${
                dropdownActive ? `rotate-180` : ``
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
          {dropdownActive ? (
            <div className="bg-[#eaeaea] rounded-[7px] border-[lightgray] border-[1px] select-none">
              {skriptat.map((skripta, index) => (
                <div
                  className=" w-100%  font-[Montserrat] border-[lightgray] border-b-[1px] font-medium py-2 text-[20px] pl-3 hover:bg-[lightgray]"
                  onClick={() => {
                    handleSelectedTab(index);
                    setSkripta({ id: index, titulli: skriptat[index] });
                  }}
                  key={index}
                >
                  <p>{skripta}</p>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-[40%] pt-3 flex flex-row items-center gap-2">
          <label
            className="text-[20px] font-semibold font-[Montserrat]"
            htmlFor=""
          >
            Kapitulli: <span className="text-[red]">*</span>
          </label>
          <input
            type="number"
            min="1"
            className="h-[45px]  w-[70px] border-[lightgray] border-[1px] font-[Montserrat] text-[25px] pl-3 focus:outline-none bg-[#eaeaea] rounded-[12px]"
            value={kapitulli}
            onChange={(event) => setKapitulli(event.target.value)}
          />
        </div>
        <div className="w-[40%] pt-3 flex flex-row items-center gap-2">
          <label
            className="text-[20px] font-semibold font-[Montserrat]"
            htmlFor=""
          >
            Faqe: <span className="text-[red]">*</span>
          </label>
          <input
            type="number"
            min="1"
            className="h-[45px] w-[90px] border-[lightgray] border-[1px] font-[Montserrat] text-[25px] pl-3 focus:outline-none bg-[#eaeaea] rounded-[12px]"
            value={faqe}
            onChange={(event) => setFaqe(event.target.value)}
          />
        </div>
        <div className="w-[40%] flex flex-col gap-1 pt-3">
          <label
            className="text-[20px] font-semibold font-[Montserrat]"
            htmlFor=""
          >
            Kërkimi i detyrës:
          </label>
          <textarea
            onChange={(event) => setKerkimiDetyres(event.target.value)}
            className="pl-3 pt-1 border-[lightgray] border-[1px] text-[25px] font-[Montserrat] focus:outline-none bg-[#eaeaea] rounded-[12px]"
            name="Pershkrimi"
            value={kerkimiDetyres}
            cols="30"
            rows="3"
            placeholder="x^2 + 2x - 4"
          ></textarea>
          <a
            href="#"
            className="text-[blue] underline font-[Montserrat] text-[17px] hover:text-[#4a51d1]"
          >
            Kliko Këtu Për Më Shumë Informata Se Si Duhet Të Vendosen Të Dhënat
          </a>
        </div>
        <div className="w-[40%] flex flex-col gap-1 pt-3">
          <label
            className="text-[20px] font-semibold font-[Montserrat]"
            htmlFor=""
          >
            Zgjidhja e detyrës: <span className="text-[red]">*</span>
          </label>
          <div className="flex flex-row justify-between">
            <button
              onClick={() => setIsActive("foto")}
              className={` w-[100%] h-[40px] font-[Montserrat] font-semibold text-[20px] rounded-lg ${
                isActive === "foto"
                  ? "bg-purple-700 bg-opacity-20"
                  : "bg-[#eeeeee]"
              } `}
            >
              Foto
            </button>
            {/* <button
              onClick={() => setIsActive("tekst")}
              className={` w-[50%] h-[40px] font-[Montserrat] font-semibold text-[20px] rounded-r-lg ${
                isActive === "tekst"
                  ? "bg-purple-700 bg-opacity-20"
                  : "bg-[#eeeeee]"
              } `}
            >
              Tekst
            </button> */}
          </div>
          <div>
            {isActive === "foto" ? (
              <>
                {/* <form
                  action=""
                  className="flex flex-col justify-center items-center border-[2px] border-dashed border-[#6A00D3] min-h-[100px] py-4 cursor-pointer rounded-[10px]"
                  onClick={() =>
                    document.querySelector(".input-field").click()
                  }
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="input-field"
                    hidden
                    onChange={({ target: { files } }) => {
                      files[0] && setfileNames(files[0].name);
                      if (files) {
                        setImage(URL.createObjectURL(files[0]));
                      }
                    }}
                  />
                  {image ? (
                    <img src={image} width={150} alt={fileNames} />
                  ) : (
                    <>
                      <img
                        src={cloudArrowUpIcon}
                        className="h-[50px]"
                        alt="UploadIcon"
                      />
                      <h1 className="text-[20px]">Vendos Fotot Ketu</h1>
                    </>
                  )}
                </form> */}

                <form
                  className={`flex flex-col justify-center items-center border-[2px] ${
                    image.length > 0 && "gap-6"
                  } border-dashed border-[#6A00D3]  py-4 cursor-pointer rounded-[10px]`}
                  // onClick={() => document.querySelector(".input-field").click()}
                >
                  {/* <input
                    type="file"
                    accept="image/*"
                    className="input-field"
                    hidden
                    multiple
                    onChange={({ target: { files } }) => {
                      const selectedImages = Array.from(files).slice(0, 3);

                      if (selectedImages.length > 0) {
                        setImage(
                          selectedImages.map((file) =>
                            URL.createObjectURL(file)
                          )
                        );
                        setfileNames(
                          selectedImages.map((file) => file.name).join(", ")
                        );
                      }
                    }}
                  /> */}

                  <input
                    type="file"
                    accept="image/*"
                    className="input-field"
                    hidden
                    multiple
                    onChange={({ target: { files } }) => {
                      const selectedImages = Array.from(files).slice(0, 3);
                      console.log("selectedImages", selectedImages);
                      if (selectedImages.length > 0) {
                        setImage(selectedImages);

                        setfileNames(
                          selectedImages.map((file) => file.name).join(", ")
                        );
                      }
                    }}
                  />

                  <div className="flex flex-row gap-5">
                    {image.map((img, index) => (
                      <div
                        className="bg-[gray] bg-opacity-20 flex flex-col gap-2 px-5 py-3 rounded-lg"
                        key={index}
                      >
                        <span>
                          <h1
                            onClick={() => {
                              setImageIndex(index);
                              deleteImage();
                            }}
                          >
                            x
                          </h1>
                        </span>

                        <img
                          key={index}
                          src={URL.createObjectURL(img)}
                          width={200}
                          alt={`Image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex flex-col justify-center"
                    onClick={() =>
                      document.querySelector(".input-field").click()
                    }
                  >
                    <img
                      src={AddFolderIcon}
                      className="h-[50px] select-none"
                      alt="UploadIcon"
                    />
                  </div>
                </form>

                {/* <section className="py-[5px] px-[20px]">
                  <span className=" flex flex-row justify-between items-center py-[10px] px-[20px] rounded-[10px] bg-purple-700 bg-opacity-20">
                    <p className="text-[18px]">{fileNames}</p>
                    {image.length > 0 ? (
                      <h1
                        onClick={() => {
                          setfileNames("Asnje foto e vendosur");
                          setImage([]);
                        }}
                      >
                        <b>x</b>
                      </h1>
                    ) : (
                      ""
                    )}
                  </span>
                </section> */}
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="text-[20px] font-semibold font-[Montserrat] text-[gray] pt-4">
              <span className="text-[red]">*</span> kërkohet (patjetër të
              plotësohet)
            </p>
          </div>
          <div className="flex justify-center py-6">
            <button
              onClick={submitHandler}
              className="bg-[#6A00D3] text-white font-[Montserrat] font-semibold text-[20px] py-[10px] px-[50px] rounded-xl"
            >
              Ruaj
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMathTasks;
