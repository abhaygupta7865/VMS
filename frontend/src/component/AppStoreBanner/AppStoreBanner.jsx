import React from "react";
import pattern from "../../assets/Website/pattern.jpeg";
import PlayStoreImg from "../../assets/Website/play_store.png";
import AppStoreImg from "../../assets/Website/app_store.png";
 const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  widht: "100%",
 }

const AppStoreBanner = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600]
    sm:grid sm:place-item-center">
      <div className="container p-14">
      <div className="text-black py-8 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl" style={bannerImg}
      >
        <div>
          <div className="space-y-2 max-w-xl mx-auto">
            <h1 data-aos="fade-up"
            className="text-2xl text-center sm:text-4xl font-semibold font-serif">Get Started with our app</h1>
            <p data-aos="fade-up"
            className="text-center text-sm">Download the Chalo Chale Car Rental App for a simpler, smarter rental experience.
            </p>
            <div data-aos="fade-up"
            className="flex justify-center flex-wrap items-center gap-4">
              <a href="#">
                <img src={PlayStoreImg} alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
              </a>
              <a href="#">
                <img src={AppStoreImg } alt="" 
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default AppStoreBanner;