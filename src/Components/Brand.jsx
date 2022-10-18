import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import client1 from "../assets/clients/client-1.png";
import client2 from "../assets/clients/client-2.png";
import client3 from "../assets/clients/client-3.jpg";
import client4 from "../assets/clients/client-4.jpg";
import client5 from "../assets/clients/client-5.jpg";
import client6 from "../assets/clients/client-6.jpg";

AOS.init();
const Brand = () => {
  return (
    <div className="bg-[#f3f5fa] text-center">
      <div className="container">
        <div className="flex flex-col-6 flex-wrap gap-20 items-center justify-center" data-aos='zoom-in' data-aos-duration="1500">
          <img className="w-[10%] inline-block p-3 transition-all grayscale hover:grayscale-0 hover:scale-110" src={client1} alt="client1" />
          <img className="w-[10%] inline-block p-3 transition-all grayscale hover:grayscale-0 hover:scale-110" src={client2} alt="client2" />
          <img className="w-[10%] inline-block p-3 transition-all grayscale hover:grayscale-0 hover:scale-110" src={client3} alt="client3" />
          <img className="w-[10%] inline-block p-3 transition-all grayscale hover:grayscale-0 hover:scale-110" src={client4} alt="client4" />
          <img className="w-[10%] inline-block p-3 transition-all grayscale hover:grayscale-0 hover:scale-110" src={client5} alt="client5" />
          <img className="w-[10%] inline-block p-3 transition-all grayscale hover:grayscale-0 hover:scale-110" src={client6} alt="client6" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
