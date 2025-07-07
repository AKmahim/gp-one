import React from "react";
import Countdown from "../../components/Countdown";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="bg-[url('/HeaderBGBack.jpg')] bg-cover bg-center py-10 flex flex-col items-center justify-center">
        <div className="headerBg flex flex-col justify-center rounded-4xl py-20 px-12 w-full max-w-7xl shadow inset-shadow-black ">
          <img
            className="w-96 mx-auto"
            src="/GP_ONE_Logo2.png"
            alt="gp one logo"
          />
          <div className="CountDown text-center ">
            <h2>Event goes live in</h2>
            <div className="countdown bg-black">{/* <Countdown /> */}</div>
            <div className="Watch">
              <h3>Watch live on</h3>
              <img src="" alt="" className="yt" />
              <img src="" alt="" className="yt" />
              {/* <!-- From Uiverse.io by andrew-demchenk0 -->  */}
              <button>
                <span class="icon">
                  <svg
                    fill="none"
                    height="33"
                    viewBox="0 0 120 120"
                    width="33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m120 60c0 33.1371-26.8629 60-60 60s-60-26.8629-60-60 26.8629-60 60-60 60 26.8629 60 60z"
                      fill="#cd201f"
                    ></path>
                    <path
                      d="m25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14h-42c-7.732 0-14-6.268-14-14z"
                      fill="#fff"
                    ></path>
                    <path
                      d="m74 59.5-21 10.8253v-21.6506z"
                      fill="#cd201f"
                    ></path>
                  </svg>
                </span>
                <span class="text1">Follow me</span>
                <span class="text2">1,2k</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
