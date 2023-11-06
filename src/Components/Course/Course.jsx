import PropTypes from 'prop-types';
import { BsBook } from "react-icons/bs";

const Course = ({ course,selectCourse }) => {

  const { cover_img, title, description, credit, price } = course;
  return (
    <div className="sm:m-5 border p-5 shadow-2xl rounded-lg lg:m-0">
      <img className='inline-block h-52 mb-5 rounded-lg w-full' src={cover_img} alt="" />
      <h3 className='text-xl font-bold mb-3 '>{title}</h3>
      <p className='mb-3 h-16'>{description}</p>
      <div className='flex justify-between'>
        <p>৳ Price:{price}</p>
        <div className='flex gap-2 items-center'> <BsBook />  <p>Credit:{credit}</p></div>
      </div>
      <div className='flex items-center justify-center mt-3'>
        <button
          className="btn btn-active btn-primary w-full"
          onClick={() =>selectCourse(course)}
        >Select</button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  selectCourse: PropTypes.func.isRequired
};

export default Course;