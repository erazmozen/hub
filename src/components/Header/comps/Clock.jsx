import { useEffect, useState } from "react";
import "./clock.css";

const Clock = ({ icons }) => {
  const [clockState, setClockState] = useState({
    loading: true,
  });

  useEffect(() => {
    const getTimeData = async () => {
      const date = new Date();
      const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
      ];
      const [hour, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];

      setClockState({
        month: month,
        day: day,
        year: year,
        hour: hour,
        minutes: minutes,
        seconds: seconds,
        loading: false,
      });
    };

    getTimeData();
    setInterval(() => {
      getTimeData();
    }, 60000);
  }, []);

  return (
    <div>
      {!clockState.loading && (
        <div className="clock-wrapper">
          <div className="clock-time">
            <p>
              {clockState.hour}:{clockState.minutes}
            </p>
            <icons.CgTimer />
          </div>
          <div className="clock-date">
            <p>
              {clockState.month}.{clockState.day}.
              {clockState.year}.
            </p>
            <icons.CgCalendarDates />
          </div>
        </div>
      )}
    </div>
  );
};

export default Clock;
