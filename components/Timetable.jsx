import React from "react";

const Timetable = () => {
  return (
    <div className="relative flex h-screen items-center justify-center text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <h1 className="text-4xl font-bold">📖 Timetable Page</h1>
    </div>
  );
};

export default Timetable;
