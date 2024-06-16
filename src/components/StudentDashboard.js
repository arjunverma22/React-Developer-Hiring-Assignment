import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import '../styles/StudentDashboard.css';


const StudentDashboard = () => {
  const { studentId } = useParams();
  const enrolledCourses = useSelector(state =>
    state.courses.courses.filter(course =>
        course.students.some(student => student.id  === parseInt(studentId))
    )
  );

  return (
    <div className="student-dashboard">
      <Link to={`/`}>
        <h2>Home</h2>
      </Link>
      <h1>Student Dashboard</h1>
      <h2>Enrolled Courses</h2>
      <ul className="course-list">
        {enrolledCourses.map(course => (
          <li key={course.id} className="course-item">
            <Link to={`/course/${course.id}`}>
            <h3>{course.name}</h3>
            </Link>
            <p>Instructor: {course.instructor}</p>
            {course.students.map(student => (
              student.id === parseInt(studentId) && (
                <div>
                <p key={student.id}>Student Id: {student.id}</p>
                <p key={student.id}>Student name: {student.name}</p>

                {student.completed ? (
                    <span className="thumbs-up">👍</span>
                  ) : (
                    <div>
                    <p>Progress: {student.progress}%</p>
                    <div className="progress">
                    <div
                    className="progress-bar"
                    style={{ width: `${student.progress}%` }}
                    ></div>
                    </div>
                    <p>Due Date: {student.dueDate}</p>
                    <button>Mark as Completed</button>
                    </div>
                  )}
                </div>
              )
            ))}
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default StudentDashboard;