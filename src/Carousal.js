import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StaticImage } from "gatsby-plugin-image";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

function Carousal() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextE1: ".button-next-slide",
          prevE1: ".button-prev-slide",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="image relative">
            <StaticImage
              src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
              alt=""
            />
            <div className="space-y-5 tittle-content absolute top-[25%] left-[8rem]">
              <h3 className="text-[16px]">Lorem Ipsum</h3>
              <p className="text-[14px] w-[40%]">
                Lorem Ipsum dolar sit amet, elit Qulification.
              </p>
              <button className="px-[2rem] bg-[blue] text-[15px] p-2 text-white">
                Know More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <StaticImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXLdXoqRoNsxfKIBjaq7SKN4vwWQFnGNR4ArZGefsW_KJF7sEuZqlGZSTwVmV9zLRvV4&usqp=CAU" />
            <div className="space-y-5 tittle-content absolute top-[25%] left-[8rem]">
              <h3 className="text-[16px]">Lorem Ipsum</h3>
              <p className="text-[14px] w-[40%]">
                Lorem Ipsum dolar sit amet, elit Qulification.
              </p>
              <button className="px-[2rem] bg-[blue] text-[15px] p-2 text-white">
                Know More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <StaticImage src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
            <div className="space-y-5 tittle-content absolute top-[25%] left-[8rem]">
              <h3 className="text-[16px]">Lorem Ipsum</h3>
              <p className="text-[14px] w-[40%]">
                Lorem Ipsum dolar sit amet, elit Qulification.
              </p>
              <button className="px-[2rem] bg-[blue] text-[15px] p-2 text-white">
                Know More
              </button>
            </div>

            <div className="top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 text-white w-[40px] h-[40px] bg-[#000] grid place-items-center">
              <HiOutlineArrowNarrowLeft />
            </div>
            <div className="top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 text-white w-[40px] h-[40px] bg-[#000] grid place-items-center">
              {" "}
              <HiOutlineArrowNarrowRight />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousal;
