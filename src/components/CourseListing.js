import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../actions/courseActions';
import { Link } from 'react-router-dom';
import '../styles/CourseListing.css';

const CourseListing = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const loading = useSelector(state => state.courses.loading);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className="course-listing">
      <h1>Course Listing Page</h1>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <Link to={`/course/${course.id}`}>
              <h2>{course.name}</h2>
            </Link>
            <p>Instructor: {course.instructor}</p>
            <p>Description: {course.description}</p>
            <p>Likes: {course.likes}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CourseListing;