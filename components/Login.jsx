import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Multiple student credentials
  const studentCreds = [
    { id: "s", password: "s" },
    { id: "s2", password: "s2" },
  ];

  // Staff credentials
  const staffCreds = { id: "t", password: "t" };

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "student") {
      // Check if entered student credentials exist
      const student = studentCreds.find(
        (s) => s.id === id && s.password === password
      );
      if (student) {
        // ✅ Save current student ID in localStorage
        localStorage.setItem("currentStudentId", student.id);

        navigate("/student");
        return;
      }
    }

    if (
      role === "staff" &&
      id === staffCreds.id &&
      password === staffCreds.password
    ) {
      navigate("/staff");
      return;
    }

    // If no match found
    setError("Invalid ID or Password for the selected role");
  };

  return (
    <div className="relative flex h-screen items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="flex flex-col items-center gap-6">
        {/* CLASSWEB Branding */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-green-500">&lt;</span>
            <span className="text-white">CLASS</span>
            <span className="text-green-500">WEB/&gt;</span>
          </h1>
          <p className="text-blue-400 text-lg">Your Campus Helper</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 w-96 border border-gray-200/20">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Login
          </h2>

          {/* Role Switcher */}
          <div className="flex justify-center mb-6">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`px-4 py-2 rounded-l-md border ${
                role === "student"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole("staff")}
              className={`px-4 py-2 rounded-r-md border ${
                role === "staff"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Staff
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center mb-3">{error}</p>
          )}

          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder={`Enter ${role} ID`}
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="border p-2 rounded-md bg-transparent text-white placeholder-gray-300"
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded-md bg-transparent text-white placeholder-gray-300"
            />

            <button
              type="submit"
              className="bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
            >
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
