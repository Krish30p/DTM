import React, { useState } from 'react';
import { Calendar, User, BookOpen, Clock, LogOut, Plus, Trash2 } from 'lucide-react';


const CalendarComponent = ({ onBack }) => {
  const months = ["Jul '25", "Aug '25", "Sep '25", "Oct '25", "Nov '25", "Dec '25"];

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
};

const TimetableSelectorComponent = ({ onBack, studentId, studentSelections, timetableData, availableSubjects, availableStaff, updateStudentSelection }) => {
  const selections = studentSelections[studentId];
  const [saveMessage, setSaveMessage] = useState('');

  const getAllSlots = () => {
    const slots = new Set();
    Object.values(timetableData).forEach(periods => {
      periods.forEach(period => {
        slots.add(period);
      });
    });
    return Array.from(slots).sort();
  };

  const addSubjectSchedule = () => {
    const newSchedule = {
      id: Date.now(),
      subject: '',
      staffPref1: '',
      staffPref2: '',
      slot: ''
    };
    updateStudentSelection(studentId, 'subjectSchedules', [...selections.subjectSchedules, newSchedule]);
  };

  const removeSubjectSchedule = (id) => {
    updateStudentSelection(studentId, 'subjectSchedules', selections.subjectSchedules.filter(s => s.id !== id));
  };

  const updateSchedule = (id, field, value) => {
    const updated = selections.subjectSchedules.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    );
    updateStudentSelection(studentId, 'subjectSchedules', updated);
  };

  const handleSavePreferences = () => {
    setSaveMessage('Your preferences have been updated successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="mb-4 px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          ← Back to Dashboard
        </button>

        <div className="grid md:grid-cols-1 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <Clock className="text-purple-500" />
              Weekly Timetable Reference
            </h2>
            <div className="overflow-x-auto text-xs">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Day</th>
                    {[1,2,3,4,5,6,7,8,9,10,11].map(h => (
                      <th key={h} className="border p-1">H{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(timetableData).map(([day, periods]) => (
                    <tr key={day}>
                      <td className="border p-2 font-semibold">{day}</td>
                      {periods.map((period, idx) => (
                        <td key={idx} className="border p-1 text-center">{period}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <BookOpen className="text-green-500" />
              Subject Schedule
            </h2>
            <button
              onClick={addSubjectSchedule}
              className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Add Subject
            </button>
          </div>

          {saveMessage && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {saveMessage}
            </div>
          )}

          <div className="space-y-4">
            {selections.subjectSchedules.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No subjects added yet. Click "Add Subject" to start.</p>
            ) : (
              selections.subjectSchedules.map((schedule) => (
                <div key={schedule.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="grid md:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                      <select
                        value={schedule.subject}
                        onChange={(e) => updateSchedule(schedule.id, 'subject', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select Subject</option>
                        {availableSubjects.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Staff Preference 1</label>
                      <select
                        value={schedule.staffPref1}
                        onChange={(e) => updateSchedule(schedule.id, 'staffPref1', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select Staff</option>
                        {availableStaff.map(staff => (
                          <option key={staff} value={staff}>{staff}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Staff Preference 2</label>
                      <select
                        value={schedule.staffPref2}
                        onChange={(e) => updateSchedule(schedule.id, 'staffPref2', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select Staff</option>
                        {availableStaff.map(staff => (
                          <option key={staff} value={staff}>{staff}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Slot</label>
                      <select
                        value={schedule.slot}
                        onChange={(e) => updateSchedule(schedule.id, 'slot', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select Slot</option>
                        {getAllSlots().map((slot, idx) => (
                          <option key={idx} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-end">
                      <button
                        onClick={() => removeSubjectSchedule(schedule.id)}
                        className="w-full px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {selections.subjectSchedules.length > 0 && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSavePreferences}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('select');
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  const [studentSelections, setStudentSelections] = useState({
    s1: { subjectSchedules: [] },
    s2: { subjectSchedules: [] },
    s3: { subjectSchedules: [] }
  });

  const availableStaff = ['Dr. Smith', 'Prof. Johnson', 'Ms. Williams', 'Dr. Brown', 'Mr. Davis'];
  const availableSubjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English', 'History'];
  
  const timeSlots = [
    { label: 'Hour 1', time: '08:00 - 08:50' },
    { label: 'Hour 2', time: '08:50 - 09:40' },
    { label: 'Hour 3', time: '09:45 - 10:35' },
    { label: 'Hour 4', time: '10:40 - 11:30' },
    { label: 'Hour 5', time: '11:35 - 12:25' },
    { label: 'Hour 6', time: '12:30 - 01:20' },
    { label: 'Hour 7', time: '01:25 - 02:15' },
    { label: 'Hour 8', time: '02:20 - 03:10' },
    { label: 'Hour 9', time: '03:10 - 04:00' },
    { label: 'Hour 10', time: '04:00 - 04:50' },
    { label: 'Hour 11', time: '04:50 - 05:30' },
    { label: 'Hour 12', time: '05:30 - 06:10' }
  ];

  const timetableData = {
    'Day 1': ['AA / X', 'F / X', 'F', 'G', 'P6', 'P7', 'P8', 'P9', 'P10', 'L11', 'L12'],
    'Day 2': ['P11', 'P12/X', 'P13/X', 'P14', 'P15', 'BB', 'G', 'G', 'A', 'L21', 'L22'],
    'Day 3': ['CC / X', 'A / X', 'D', 'B', 'P26', 'P27', 'P28', 'P29', 'P30', 'L31', 'L32'],
    'Day 4': ['P31', 'P32/X', 'P33/X', 'P34', 'P35', 'DD', 'B', 'E', 'C', 'L41', 'L42'],
    'Day 5': ['EE / X', 'C / X', 'F', 'D', 'P46', 'P47', 'P48', 'P49', 'P50', 'L51', 'L52']
  };

  const handleLogin = (type, id, pass) => {
    if (type === 'student' && ['s1', 's2', 's3'].includes(id) && id === pass) {
      setLoggedInUser({ type: 'student', id });
      setCurrentView('student-dashboard');
      return true;
    } else if (type === 'staff' && id === 'staff' && pass === 'staff') {
      setLoggedInUser({ type: 'staff', id });
      setCurrentView('staff-dashboard');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setCurrentView('select');
  };

  const updateStudentSelection = (studentId, field, value) => {
    setStudentSelections(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: value
      }
    }));
  };

  if (currentView === 'select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Welcome to CLASSWEB
          </h1>
          <div className="space-y-4">
            <button
              onClick={() => setCurrentView('student-login')}
              className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <User size={24} />
              Student Login
            </button>
            <button
              onClick={() => setCurrentView('staff-login')}
              className="w-full py-4 bg-purple-500 text-white rounded-xl font-semibold text-lg hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <BookOpen size={24} />
              Staff Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const LoginPage = ({ type }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
      if (!handleLogin(type, id, password)) {
        setError('Invalid credentials');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <button
            onClick={() => setCurrentView('select')}
            className="mb-4 text-gray-600 hover:text-gray-800"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            {type === 'student' ? 'Student Login - CLASSWEB' : 'Staff Login - CLASSWEB'}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">ID</label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder={type === 'student' ? 's1, s2, or s3' : 'staff'}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Enter password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  };

  const StudentDashboard = () => {
    const studentId = loggedInUser.id;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome, {studentId.toUpperCase()}
            </h1>
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentView('timetable-selector')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Clock size={20} />
                Timetable Selector
              </button>
              <button
                onClick={() => setCurrentView('calendar')}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center gap-2"
              >
                <Calendar size={20} />
                Calendar
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard Overview</h2>
            <p className="text-gray-600 mb-6">
              Click on "Timetable Selector" to view your weekly timetable and manage your subject schedules.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 transition-colors">
                <Clock className="text-blue-500 mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2">Timetable Selector</h3>
                <p className="text-gray-600">View weekly timetable and manage subject schedules</p>
              </div>
              <div className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <Calendar className="text-purple-500 mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2">Calendar</h3>
                <p className="text-gray-600">View your calendar and upcoming events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StaffDashboard = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Staff Dashboard</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentView('calendar')}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center gap-2"
              >
                <Calendar size={20} />
                Calendar
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {['s1', 's2', 's3'].map(studentId => (
              <div key={studentId} className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Student: {studentId.toUpperCase()}
                </h2>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-green-600">Subject Schedules:</h3>
                  {studentSelections[studentId].subjectSchedules.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Subject</th>
                            <th className="border p-3 text-left">Staff Preference 1</th>
                            <th className="border p-3 text-left">Staff Preference 2</th>
                            <th className="border p-3 text-left">Slot</th>
                          </tr>
                        </thead>
                        <tbody>
                          {studentSelections[studentId].subjectSchedules.map(schedule => (
                            <tr key={schedule.id} className="hover:bg-gray-50">
                              <td className="border p-3">{schedule.subject || '-'}</td>
                              <td className="border p-3">{schedule.staffPref1 || '-'}</td>
                              <td className="border p-3">{schedule.staffPref2 || '-'}</td>
                              <td className="border p-3">{schedule.slot || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No subject schedules added</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (currentView === 'calendar') {
    return <CalendarComponent onBack={() => setCurrentView(loggedInUser.type === 'student' ? 'student-dashboard' : 'staff-dashboard')} />;
  }

  if (currentView === 'timetable-selector') {
    return (
      <TimetableSelectorComponent 
        onBack={() => setCurrentView('student-dashboard')}
        studentId={loggedInUser.id}
        studentSelections={studentSelections}
        timetableData={timetableData}
        availableSubjects={availableSubjects}
        availableStaff={availableStaff}
        updateStudentSelection={updateStudentSelection}
      />
    );
  }

  if (currentView === 'student-login') return <LoginPage type="student" />;
  if (currentView === 'staff-login') return <LoginPage type="staff" />;
  if (currentView === 'student-dashboard') return <StudentDashboard />;
  if (currentView === 'staff-dashboard') return <StaffDashboard />;

  return null;
};

export default App;