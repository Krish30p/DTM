import { useNavigate } from "react-router-dom";

const StudentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen items-center justify-center text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold mb-8">Student Page</h1>

        <button
          onClick={() => navigate("/calendar")}
          className="bg-blue-900 hover:bg-blue-950 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg w-64"
        >
          Calendar
        </button>

        <button
          onClick={() => navigate("/staffselector")}
          className="bg-green-900 hover:bg-green-950 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg w-64"
        >
          Staff Selector
        </button>

        <button
          onClick={() => navigate("/timetable")}
          className="bg-purple-900 hover:bg-purple-950 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg w-64"
        >
          Timetable Selector
        </button>
      </div>
    </div>
  );
};

export default StudentPage;
