import React from "react";
import Image from "next/image";

function Ourclient() {
  return (
    <div className="bg-neutralwhite flex justify-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="lg:px-24 px-4 py-7">
          {/* Heading Section */}
          <div className="text-center">
            <h2 className="text-neutral_DGrey text-[28px]/[36px] font-semibold">
              Our Clients
            </h2>
            <p className="text-neutralL_Grey text-[12px]/[16px]">
              We have been working with some Fortune 500+ clients
            </p>
          </div>

          {/* Clients Logos */}
          <div className="mt-3 flex justify-between items-center flex-wrap gap-20 gap-y-6 max-w-[802px]">
            {[
              { src: "/Logo-11.png", alt: "Icon 1", width: 100, height: 100 },
              { src: "/Logo-1.png", alt: "Icon 2", width: 100, height: 100 },
              { src: "/Logo-2.png", alt: "Icon 3", width: 100, height: 100 },
              { src: "/Logo-3.png", alt: "Icon 4", width: 100, height: 100 },
              { src: "/Logo-4.png", alt: "Icon 5", width: 100, height: 100 },
              { src: "/Logo-5.png", alt: "Icon 6", width: 100, height: 100 },
              { src: "/Logo-6.png", alt: "Icon 7", width: 100, height: 100 },
            ].map((image, index) => (
              <div key={index} className="relative w-[45px] h-[45px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  quality={100}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourclient;
