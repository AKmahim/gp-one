import React from "react";
import Countdown from "../../components/Countdown";
import NewCountdown from "../../components/NewCountdown";

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
          <div className="CountDown text-center pt-6">
            <h2 className="text-3xl py-2">Event goes live in</h2>
            <div className="text-black">
              {/* <Countdown /> */}
              <NewCountdown />
            </div>
            <div className="Watch  flex justify-center ">
              <div className="px-10 py-2 bg-white ring-1 ring-cyan-800 rounded-4xl flex justify-center items-center">
                <h3 className="mr-4 font-medium">Watch live on</h3>
                <button>
                  <img src="/youtube-logo-hd.png" alt="youtube-logo-hd.png" />
                </button>
                <button>
                  <img src="/Facebook-logo.png" alt="Facebook-logo.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/section2.jpg')] bg-cover bg-top py-40 flex flex-col items-center justify-center">
        <div className="info">
          <h2 className="text-5xl text-center font-bold mb-4">
            Beyond connection, in One Ecosystem
          </h2>
          <p className="text-3xl max-w-2xl mx-auto text-center leading-12">
            Discover ideas, experiences and solutions that push the boundaries
            of what’s possible. Join us as innovation takes a new flight.
          </p>
        </div>
        <div className="events flex gap-20 font-bold text-2xl pt-32">
          {/* Gradient border layer */}
          {/* <div className="relative rounded-3xl  eventCard bg-white flex flex-col items-center rounded-3xl z-10">
            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-tr from-gray-400 to-transparent z-[-1]"></div>
            <div className="bg-white w-full h-full px-20 py-16">
              <h3 className="mb-6 font-medium">Event Keynote</h3>
              <button className="btn-grad text-lg">Stay Tuned</button>
            </div>
          </div> */}

          <div className="bg-gradient-to-tr from-gray-200 to-transparent bg-white flex flex-col items-center p-1 rounded-3xl">
            <div className="eventCard bg-white flex flex-col items-center px-20 py-16 rounded-3xl">
              <h3 className="mb-6 font-medium">Event Keynote</h3>
              <button className="btn-grad text-lg ">Stay Tuned</button>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-gray-12`00 to-transparent bg-white flex flex-col items-center p-1 rounded-3xl">
            <div className="eventCard bg-white flex flex-col items-center px-20 py-16 rounded-3xl">
              <h3 className="mb-6 font-medium">New Plaltforms</h3>
              <button className="btn-grad text-lg ">Stay Tuned</button>
            </div>
          </div>
        </div>
        <div className="events flex justify-center items-center w-full max-w-1/2 gap-10 pt-20">
          <img
            className="flex-1 w-1/2"
            src="/GP_ONE_Logo.png"
            alt="GP_ONE_Logo"
          />
          <img
            className="flex-1 w-1/4 p-10"
            src="/grameenphone_logo.png"
            alt="grameenphone_logo"
          />
        </div>
        <div className="events flex justify-center items-center w-full max-w-1/2 gap-10 pt-20">
          <button class="border-3 font-medium px-6 py-2 rounded-4xl shadow-lg">
            Visit Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
