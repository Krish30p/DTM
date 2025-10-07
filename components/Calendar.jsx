import React from "react";

/**
 * Academic Planner 2025–26 (Odd Semester) – Calendar.jsx
 * Full table view (July–December 2025).
 *
 * Uses TailwindCSS for styling. Data directly transcribed from provided table.
 */

const months = ["Jul '25", "Aug '25", "Sep '25", "Oct '25", "Nov '25", "Dec '25"];

// Each row: [Dt, Day, JulNote, JulDO, Dt, Day, AugNote, AugDO, Dt, Day, SepNote, SepDO, Dt, Day, OctNote, OctDO, Dt, Day, NovNote, NovDO, Dt, Day, DecNote, DecDO]
const rows = [
  ["1","Tue","","-","1","Fri","","5","1","Mon","","4","1","Wed","Ayutha Pooja - Holiday","-","1","Sat","","-","1","Mon","","5"],
  ["2","Wed","","-","2","Sat","","-","2","Tue","","5","2","Thu","Vijaya Dasami - Holiday","-","2","Sun","","-","2","Tue","","1"],
  ["3","Thu","","-","3","Sun","","-","3","Wed","","1","3","Fri","","5","3","Mon","","5","3","Wed","","2"],
  ["4","Fri","","-","4","Mon","Online Enrollment for M.Arch - I, M.Des - I","1","4","Thu","","2","4","Sat","","-","4","Tue","","1","4","Thu","","3"],
  ["5","Sat","","-","5","Tue","Online Enrollment ends with M.Arch - I, M.Des - I","2","5","Fri","Milad-Un-Nabi","-","5","Sun","","-","5","Wed","","2","5","Fri","Last Working Day - B.Tech - I, M.Tech (Integrated) - I","4"],
  ["6","Sun","Muharram - Holiday","-","6","Wed","","3","6","Sat","","-","6","Mon","","1","6","Thu","","3","6","Sat","","-"],
  ["7","Mon","","-","7","Thu","Physical Enrollment starts - M.Tech - I / Online Enrollment starts - M.Tech - I / Physical Enrollment for M.Arch - I, M.Des - I","4","7","Sun","","-","7","Tue","","2","7","Fri","","4","7","Sun","","-"],
  ["8","Tue","","-","8","Fri","Physical Enrollment ends with - M.Tech - I / Online Enrollment ends with - M.Tech - I / Physical Enrollment ends with M.Arch - I, M.Des - I,/ Commencement of Regular Classes: B.Arch - I, M.Des - I, B.Tech - I, M.Tech (Int) - I","5","8","Mon","","3","8","Wed","","3","8","Sat","","-","8","Mon","","5"],
  ["9","Wed","","-","9","Sat","","-","9","Tue","","4","9","Thu","","4","9","Sun","","-","9","Tue","","1"],
  ["10","Thu","","-","10","Sun","","-","10","Wed","","5","10","Fri","","5","10","Mon","","5","10","Wed","","2"],
  ["11","Fri","Online Enrollment starts B.Arch - I, B.Des - I, B.Tech - I, M.Tech (Int) - I","-","11","Mon","Commencement of Classes - M.Arch - I, M.Des - I, M.Tech - I","1","11","Thu","","1","11","Sat","","-","11","Tue","","1","11","Thu","","-"],
  ["12","Sat","Online Enrollment: - B.Des (Lateral Entry), B.Tech (Lateral Entry)","-","12","Tue","","2","12","Fri","","2","12","Sun","","-","12","Wed","","2","12","Fri","","-"],
  ["13","Sun","Online Enrollment ends with - B.Des (Lateral Entry), B.Tech (Lateral Entry)","-","13","Wed","","3","13","Sat","","-","13","Mon","","1","13","Thu","","3","13","Sat","","-"],
  ["14","Mon","","-","14","Thu","","4","14","Sun","","-","14","Tue","","2","14","Fri","","4","14","Sun","","-"],
  ["15","Tue","","-","15","Fri","Independence Day - Holiday","-","15","Mon","","3","15","Wed","","3","15","Sat","","-","15","Mon","","-"],
  ["16","Wed","","-","16","Sat","Krishna Jayanthi - Holiday","-","16","Tue","","4","16","Thu","","4","16","Sun","","-","16","Tue","","-"],
  ["17","Thu","","-","17","Sun","","-","17","Wed","","5","17","Fri","","5","17","Mon","","5","17","Wed","","-"],
  ["18","Fri","Online Enrollment ends with B.Arch - I, B.Des - I, B.Tech - I, M.Tech (Int) - I / Enrolment day - B.Tech -III, V, VII, M.Tech(Int) - III, V,VII, XI, M.Tech - III","-","18","Mon","","5","18","Thu","","1","18","Sat","","-","18","Tue","","1","18","Thu","","-"],
  ["19","Sat","Physical Enrollment - B.Tech (Lateral entry)","-","19","Tue","","1","19","Fri","","2","19","Sun","","-","19","Wed","","2","19","Fri","","-"],
  ["20","Sun","Commencement of Classes - B.Tech (Lateral entry)","-","20","Wed","","2","20","Sat","","-","20","Mon","Deepavali - Holiday","-","20","Thu","","3","20","Sat","","-"],
  ["21","Mon","Commencement of Classes - B.Des (Lateral entry) / Enrolment day Starts - M.Tech - I / Class Commencement - B.Tech - III, V,VII, M.Tech (int) - III,V,VII,IX, M.Tech - III","1","21","Thu","","3","21","Sun","","-","21","Tue","","1","21","Fri","Last Working Day - B.Tech - III, IV,VII, M.Tech - I, III M.Tech (Int)- III, V.VII,IX,","4","21","Sun","","-"],
  ["22","Tue","Enrolment day Ends - M.Tech - I","2","22","Fri","","4","22","Mon","","3","22","Wed","","2","22","Sat","","-","22","Mon","","-"],
  ["23","Wed","Class Commencement - M.Tech - I","3","23","Sat","","-","23","Tue","","4","23","Thu","","3","23","Sun","","-","23","Tue","","-"],
  ["24","Thu","Physical Enrollment starts B.Arch - I, B.Des - I , B.Tech - I, M.Tech(Int) - I","4","24","Sun","","-","24","Wed","","5","24","Fri","","4","24","Mon","","5","24","Wed","","-"],
  ["25","Fri","","5","25","Mon","","5","25","Thu","","1","25","Sat","","-","25","Tue","","1","25","Thu","Christmas - Holiday","-"],
  ["26","Sat","","-","26","Tue","","1","26","Fri","","2","26","Sun","","-","26","Wed","","2","26","Fri","","-"],
  ["27","Sun","","-","27","Wed","Vinayakar Chathurthi - Holiday","-","27","Sat","","-","27","Mon","","5","27","Thu","","3","27","Sat","","-"],
  ["28","Mon","","1","28","Thu","","2","28","Sun","","-","28","Tue","","1","28","Fri","","4","28","Sun","","-"],
  ["29","Tue","Physical Enrollment ends with B.Arch-I, B.Des-I, B.Tech - I, M.Tech (Int) - I","2","29","Fri","","3","29","Mon","","3","29","Wed","","2","29","Sat","","-","29","Mon","","-"],
  ["30","Wed","","3","30","Sat","","-","30","Tue","","4","30","Thu","","3","30","Sun","","-","30","Tue","","-"],
  ["31","Thu","","4","31","Sun","","-","31","","","","","31","Fri","","4","31","","","","","31","Wed","","-"],
];

export default function Calendar({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
          <header className="mb-6 text-center">
            <h1 className="text-xl font-bold uppercase">COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
            <p className="font-medium">SRM Institute of Science and Technology, Kattankulathur.</p>
            <h2 className="text-lg font-semibold mt-2">Academic Planner 2025 - 26 ODD</h2>
          </header>

          <table className="min-w-full text-xs border border-slate-400">
            <thead className="bg-slate-200">
              <tr>
                <th className="border border-slate-400 px-1">Dt</th>
                <th className="border border-slate-400 px-1">Day</th>
                {months.map((m) => (
                  <th key={m} className="border border-slate-400 px-2" colSpan={2}>{m}</th>
                ))}
              </tr>
              <tr className="bg-slate-100">
                <th></th>
                <th></th>
                {months.map((_, i) => (
                  <React.Fragment key={i}>
                    <th className="border border-slate-400 px-1">Note</th>
                    <th className="border border-slate-400 px-1">DO</th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-slate-300 px-1 text-center">{row[0]}</td>
                  <td className="border border-slate-300 px-1">{row[1]}</td>
                  {months.map((_, i) => (
                    <React.Fragment key={i}>
                      <td className="border border-slate-300 px-1">{row[2 + i * 4]}</td>
                      <td className="border border-slate-300 px-1 text-center">{row[3 + i * 4]}</td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <footer className="mt-4 text-xs text-slate-600">
            <p>NOTE: Day orders indicated here are tentative only and are subject to changes. Keep checking student portal for any updates.</p>
            <p className="mt-2 text-blue-900 text-center">© Application Development Centre - SRM Institute of Science & Technology - 2015</p>
          </footer>
        </div>
      </div>
    </div>
  );
}