"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Timer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 30,
    hours: 25,
    minutes: 20,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full flex-row-reverse justify-between text-[8px] font-[500]">
      <TimeUnit value={timeLeft.seconds} label="ثانية" />
      <TimerDots />
      <TimeUnit value={timeLeft.minutes} label="دقيقة" />
      <TimerDots />
      <TimeUnit value={timeLeft.hours} label="ساعة" />
      <TimerDots />
      <TimeUnit value={timeLeft.days} label="يوم" />
    </div>
  );
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="mx-0.5 flex flex-col gap-0.5 text-center">
    <span className="text-[#333333]">{value}</span>
    <span className="text-[#636363]">{label}</span>
  </div>
);

const TimerDots = () => (
  <div className="flex flex-col justify-center gap-0.5">
    {[...new Array(2)].map((_, index) => (
      <span
        key={index}
        className="block h-[2px] w-[2px] rounded-full bg-[#63636333]"
      />
    ))}
  </div>
);
