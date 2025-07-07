import React from "react";

const NewCountdown = () => {
  return (
    <div className="timer">
      <div className="item">
        <div className="days">
          <div className="day">
            <span>00</span>
          </div>
        </div>
        <p>Days</p>
      </div>
      <span className="colon">:</span>
      <div className="item">
        <div className="hours">
          <div className="hour">
            <span>00</span>
          </div>
        </div>
        <p>Hours</p>
      </div>
      <span className="colon">:</span>
      <div className="item">
        <div className="minutes">
          <div className="min">
            <span>00</span>
          </div>
        </div>
        <p>Minutes</p>
      </div>
      <span className="colon">:</span>
      <div className="item">
        <div className="seconds">
          <div className="sec">
            <span>00</span>
          </div>
        </div>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default NewCountdown;
