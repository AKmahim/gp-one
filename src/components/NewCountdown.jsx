import React, { useEffect, useState } from "react";

const TARGET_DATE = new Date(2025, 6, 10, 17, 30, 0); // July is month 6 (0-indexed)

const getTimeLeft = () => {
  const now = new Date();
  const diff = TARGET_DATE - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const pad = (num) => String(num).padStart(2, "0");

const NewCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer mb-4 pb-10">
      <div className="item">
        <div className="days">
          <div className="day">
            <span>{pad(timeLeft.days)}</span>
          </div>
        </div>
        <p>Days</p>
      </div>
      <span className="colon">:</span>
      <div className="item">
        <div className="hours">
          <div className="hour">
            <span>{pad(timeLeft.hours)}</span>
          </div>
        </div>
        <p>Hours</p>
      </div>
      <span className="colon">:</span>
      <div className="item">
        <div className="minutes">
          <div className="min">
            <span>{pad(timeLeft.minutes)}</span>
          </div>
        </div>
        <p>Minutes</p>
      </div>
      <span className="colon">:</span>
      <div className="item">
        <div className="seconds">
          <div className="sec">
            <span>{pad(timeLeft.seconds)}</span>
          </div>
        </div>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default NewCountdown;
