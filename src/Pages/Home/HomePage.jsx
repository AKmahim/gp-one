import React from "react";
import Countdown from "../../components/Countdown";
import NewCountdown from "../../components/NewCountdown";
import "../../assets/fonts/fonts.css"; // Import custom fonts
import "./HomePage.css"; // Import custom styles for HomePage

const HomePage = () => {
  return (
    <div className="home-page font-telenor">
      <section className="bg-[url('/HeaderBGBack.jpg')] bg-cover bg-center md:py-10 py-6 md:px-14 px-4 flex flex-col items-center justify-center">
        <div className="headerBg flex flex-col justify-center rounded-4xl py-20 md:px-12 px-4 w-full max-w-7xl shadow inset-shadow-black ">
          <img
            className="lg:w-96 md:w-80 w-60 mx-auto"
            src="/GP_ONE_Logo2.png"
            alt="gp one logo"
          />
          {/* youtube container  */}
          <div className="CountDown text-center pt-6 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dkzlY-0btKE?si=4d4wSVo1VYM6DlAc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          
        </div>
      </section>
      <section className="bg-[url('/section2.jpg')] bg-cover bg-top py-40 flex flex-col items-center justify-center">
        <div className="info px-4">
          <h2 className="lg:text-5xl text-3xl text-center font-bold mb-4">
            Beyond connection, in One Ecosystem
          </h2>
          <p className="lg:text-3xl text-lg max-w-2xl mx-auto text-center leading-12">
            Discover ideas, experiences and solutions that push the boundaries
            of what’s possible. Join us as innovation takes a new flight.
          </p>
        </div>
        <div className="events flex lg:flex-row flex-col lg:gap-20 gap-6 font-bold text-2xl pt-32">
          <div className="eventCardWraper bg-gradient-to-tr from-gray-200 to-transparent bg-white flex flex-col items-center p-1 rounded-3xl">
            <div className="eventCard bg-white flex flex-col items-center lg:px-20 px-12 lg:py-16 py-10 ">
              <h3 className="mb-6 font-medium">Event Keynote</h3>
              <button className="btn-grad text-lg ">Stay Tuned</button>
            </div>
          </div>
          <div className="eventCardWraper bg-gradient-to-tr from-gray-12`00 to-transparent bg-white flex flex-col items-center p-1 rounded-3xl">
            <div className="eventCard bg-white flex flex-col items-center lg:px-20 px-12 lg:py-16 py-10">
              <h3 className="mb-6 font-medium">New Plaltforms</h3>
              <button className="btn-grad text-lg ">Stay Tuned</button>
            </div>
          </div>
        </div>
        <div className="events flex justify-center items-center w-full md:max-w-1/2 max-w-2/3 gap-10 pt-20">
          <img
            className="flex-1 w-1/2"
            src="/GP_ONE_Logo.png"
            alt="GP_ONE_Logo"
          />
          <img
            className="flex-1 w-1/4 md:p-10 p-2"
            src="/grameenphone_logo.png"
            alt="grameenphone_logo"
          />
        </div>
        <div className="events flex justify-center items-center w-full max-w-1/2 gap-10 pt-20">
          {/* <button class="border-3 font-medium px-6 py-2 rounded-4xl shadow-lg">
            Visit Now
          </button> */}
          <button className="relative px-8 py-4 rounded-full font-medium text-black shadow-[0_4px_4px_rgba(0,0,0,0.25)] group">
            <span className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#172BD1] to-[#580084] group-hover:from-[#580084] group-hover:to-[#172BD1]">
              <span className="block h-full w-full rounded-full bg-white group-hover:bg-gray-50"></span>
            </span>
            <span className="relative z-10 text-[#000040] text-xl">
              Visit now
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
