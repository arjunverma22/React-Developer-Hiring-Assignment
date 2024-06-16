import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import '../styles/CourseDetails.css'; 


const CourseDetail = () => {
  const { courseId } = useParams();
  const course = useSelector(state =>
    state.courses.courses.find(course => course.id === parseInt(courseId))
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail">
      <Link to={`/`} className="home-link">
        <h2>Home</h2>
      </Link>
      <h1>Course Details</h1>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Pre-requisites: {course.prerequisites.join(', ')}</p>
      <details>
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus.map(item => (
            <li key={item.week}>
              <strong>Week {item.week}: </strong>{item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Students</summary>
        <ul>
          {course.students.map(item => (
            <li key={item.week}>
              <Link to={`/dashboard/${item.id}`}>
                <strong>Week {item.name}: </strong>{item.email} - {item.id}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CourseDetail;