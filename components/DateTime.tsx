import React, { useState, useEffect } from "react";
import { CalendarIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";

export const DateTime = () => {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });
  
  return (
    <div>
      <span>
        <CalendarIcon className="h-5 w-5" />
        {date.toLocaleDateString("th-TH")}
      </span>
      <span>
        <ClockIcon className="h-5 w-5" />
        {date.toLocaleTimeString("th-TH")}
      </span>
    </div>
  );
};

export default DateTime;
