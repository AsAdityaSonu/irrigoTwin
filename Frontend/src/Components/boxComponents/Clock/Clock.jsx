import React, { useEffect, useState } from "react";

const Clock = () => {
  const [timeAngles, setTimeAngles] = useState({
    hourAngle: 0,
    minuteAngle: 0,
    secondAngle: 0,
  });

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourAngle = (hours % 12) * 30 + minutes * 0.5;
      const minuteAngle = minutes * 6 + seconds * 0.1;
      const secondAngle = seconds * 6;

      setTimeAngles({
        hourAngle,
        minuteAngle,
        secondAngle,
      });

      setCurrentTime(now.toLocaleTimeString());
      setDate(now.toLocaleDateString());
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg shadow-md p-4 h-full flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <svg className="w-24 h-24" viewBox="0 0 100 100">
            {/* Clock Circle */}
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-yellow-800"
            />

            {/* Hour Hand */}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="30"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${timeAngles.hourAngle} 50 50)`}
              className="text-yellow-800"
            />

            {/* Minute Hand */}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="20"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${timeAngles.minuteAngle} 50 50)`}
              className="text-yellow-800"
            />

            {/* Second Hand */}
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${timeAngles.secondAngle} 50 50)`}
              className="text-yellow-800"
            />

            {/* Center Dot */}
            <circle
              cx="50"
              cy="50"
              r="2"
              fill="currentColor"
              className="text-yellow-800"
            />
          </svg>
        </div>
        <div>
          <p className="text-4xl font-bold text-yellow-800">{date}</p>
          <p className="text-6xl font-extrabold text-yellow-800 mt-2">
            {currentTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
