import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CourseDetail from './components/CourseDetail';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CourseListing />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/dashboard/:studentId" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




