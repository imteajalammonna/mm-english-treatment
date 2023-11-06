import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({courses ,selectCourse}) => {
  return (
    
     <div className=" grid-cols-3 space-y-5 lg:space-y-0 lg:gap-5 m-1 lg:grid">
     {
        courses.map(course => <Course key={course.id} selectCourse={selectCourse} course={course}></Course>)
      }
     </div>
  );
};
Courses.propTypes = {
  courses: PropTypes.array.isRequired
  ,selectCourse: PropTypes.func.isRequired
  
};
export default Courses;