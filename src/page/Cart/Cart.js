import React from "react";
import img1 from "./Img/1.webp";
import { AiFillCaretRight } from "react-icons/ai";

function Cart() {
  return (
    <>
      <div className="grid grid-cols-1 md:w-[70%] md:ml-[350px] mt-[30px] md:items-center md:justify-center md:grid-cols-2 gap-[15px]">
        <div className="flex pl-[40px] gap-[15px]">
          <div className="w-[6px] h-[450px] md:h-[300px] bg-black"></div>
          <div className="flex-col flex mt-[25px] md:mt-[50px] gap-[15px]">
            <h1 className="flex items-center text-[30px] text-[#909090]">
              Plastering{" "}
              <AiFillCaretRight className="text-[#909090] mt-[10px] text-[25px]" />
            </h1>
            <p className="w-[200px] md:w-[400px] text-left ">
              If you are carrying out extensive building renovations, a capable
              plasterer will be one of the first things you'll need to make sure
              the project is completed successfully. We can complete plastering
              in a wide range of styles and to a high degree of accuracy every
              time, leaving a perfect surface for a decorator to work from.
            </p>
          </div>
        </div>
        <div className="flex pl-[40px] gap-[15px]">
          <div className="w-[6px] h-[450px] md:h-[300px] bg-black"></div>
          <div className="flex-col flex mt-[25px] md:mt-[50px] gap-[15px]">
            <h1 className="flex items-center text-[30px] text-[#909090]">
              Roofing{" "}
              <AiFillCaretRight className="text-[#909090] mt-[10px] text-[25px]" />
            </h1>
            <p className="w-[200px] md:w-[400px] text-left ">
              Whether you require roof tiling repairs, or a full flat roof
              installation, you can count on GDS to carry out the work to an
              impeccable standard. We supply and fit EDPM rubber roofing, GRP
              felt roofing, and can also install or repair tiles and slating on
              a wide range of domestic pitched roofs. We also carry out other
              roof repairs such as guttering, fascias and soffits, and chimney
              repointing, as required.
            </p>
          </div>
        </div>
        <div className="flex pl-[40px] gap-[15px]">
          <div className="w-[6px] h-[450px] md:h-[300px] bg-black"></div>
          <div className="flex-col flex mt-[25px] md:mt-[50px] gap-[15px]">
            <h1 className="flex items-center text-[30px] text-[#909090]">
              Loft conversion{" "}
              <AiFillCaretRight className="text-[#909090] mt-[10px] text-[25px]" />
            </h1>
            <p className="w-[200px] md:w-[400px] text-left ">
              If you are looking to convert a loft or attic into additional
              living space, our experienced team is here to help. We will add
              floorboards, plaster the walls, and can add skylights and windows
              to the roof, to make the new space light and airy. Once the space
              has been constructed, we can then make sure it is decorated and
              finished to your expectations too.
            </p>
          </div>
        </div>
        <div className="flex pl-[40px] gap-[15px]">
          <div className="w-[6px] h-[450px] md:h-[300px] bg-black"></div>
          <div className="flex-col flex mt-[25px] md:mt-[50px] gap-[15px]">
            <h1 className="flex items-center text-[30px] text-[#909090]">
              Building extensions{" "}
              <AiFillCaretRight className="text-[#909090] mt-[10px] text-[25px]" />
            </h1>
            <p className="w-[200px] md:w-[400px] text-left ">
              We can construct and build extensions and annexes for domestic and
              commercial property. Alongside our building renovations in
              Greenwich, we carry out extensions and conversions across the
              London area, and will ensure every aspect of your extension
              project is performed to the highest standard of workmanship
              throughout.
            </p>
          </div>
        </div>
        <div className="img w-[100%]">
          <h1 className="text-2xl flex ml-[30px] my-[50px] lg:text-4xl lg:ml-[400px] lg:absolute">
            Your reliable <strong className="px-[10px]">decorating </strong>{" "}
            services
          </h1>
          <img
            src={img1}
            className="w-[380px] m-auto my-[15px] lg:mt-[150px] lg:ml-[350px] lg:w-[900px] lg:object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Cart;
