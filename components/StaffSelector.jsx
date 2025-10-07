import React, { useState, useEffect } from "react";

const StaffSelector = () => {
  const [studentId, setStudentId] = useState(null);
  const [preferences, setPreferences] = useState({});

  const subjects = ["Math", "Science", "English", "History", "Computer"];
  const options = ["A", "B", "C"];

  // ✅ Load studentId + saved preferences
  useEffect(() => {
    const id = localStorage.getItem("currentStudentId");
    if (id) {
      setStudentId(id);

      const allSelections =
        JSON.parse(localStorage.getItem("studentSelections")) || {};
      if (allSelections[id]) {
        setPreferences(allSelections[id]);
      }
    }
  }, []);

  // ✅ Save preferences whenever they change
  useEffect(() => {
    if (studentId) {
      const allSelections =
        JSON.parse(localStorage.getItem("studentSelections")) || {};
      allSelections[studentId] = preferences;
      localStorage.setItem("studentSelections", JSON.stringify(allSelections));
    }
  }, [preferences, studentId]);

  const handleSelect = (subject, option) => {
    setPreferences((prev) => ({
      ...prev,
      [subject]: option,
    }));
  };

  return (
    <div className="relative flex h-screen text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold mb-6">
          {studentId ? `Preferences for ${studentId}` : "No Student Logged In"}
        </h1>

        <div className="w-3/4 bg-gray-800 rounded-xl p-6 shadow-lg">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="flex items-center justify-between mb-4"
            >
              <span className="text-xl">{subject}</span>
              <div className="flex gap-3">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(subject, opt)}
                    className={`px-4 py-2 rounded-lg transition ${
                      preferences[subject] === opt
                        ? "bg-green-600"
                        : "bg-gray-600 hover:bg-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Debug / confirmation */}
        <div className="mt-4 text-lg">
          ✅ Saved Preferences:{" "}
          <pre className="bg-black/30 p-2 rounded-md inline-block">
            {JSON.stringify(preferences, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default StaffSelector;
