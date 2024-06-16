import axios from 'axios';

// Action Types
export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

// Action Creators
export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST,
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(fetchCoursesRequest());
    //axios.get('https://jsonplaceholder.typicode.com/posts')
    axios.get('http://localhost:5001/courses')
      .then(response => {
        const courses = response.data;
        dispatch(fetchCoursesSuccess(courses));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchCoursesFailure(errorMessage));
      });
  };
};

