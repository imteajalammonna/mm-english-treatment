import PropTypes from 'prop-types';

const Info = ({ selectedCourses, totalCreditHours, remainingCreditHours })=> {

  let totalCoursePrices = 0;
  if (selectedCourses.length > 0) {
    totalCoursePrices = selectedCourses.reduce((acc, course) => acc + course.price, 0);
  }
  return (
    <div className="bg-gray-300 p-8 rounded-lg lg:w-1/3 lg:h-full mt-5 m-1 ">
      <h2 className="text-blue-600 font-bold text-center text-xl">Totol Credit Hours: {totalCreditHours} hr</h2>
      <hr className="my-3" />
      <h2 className="text-2xl font-bold">Course Name</h2>
      <ol className="list-decimal list-inside">
        {selectedCourses.map((course, idx) => (
          <li key={idx}>{course.title}</li>
        ))}
      </ol>
      <hr className="my-3" />
      <h3>Total Credits: {remainingCreditHours} hr</h3>
      <hr className="my-3" />
      <h3>Total Prices: {totalCoursePrices} ৳</h3>

    </div>

  );
};

Info.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalCreditHours: PropTypes.number,
  remainingCreditHours: PropTypes.number.isRequired
};

export default Info;
