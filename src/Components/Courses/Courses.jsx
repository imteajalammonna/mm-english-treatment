import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Swal from "sweetalert2";
import Info from "../Info/Info";


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('courses.json')
      .then(res => res.json())
      .then(data => {
        setCourses(data)
        setLoading(false);
      })
  }, []);


  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(20);
  const [remainingCreditHours, setRemainingCreditHours] = useState(0);

  const selectCourse = (course) => {
    const isAlreadyExist = selectedCourses.find(c => c.id === course.id);
    let credits = course.credit;

    if (isAlreadyExist) {
      return Swal.fire({
        title: 'Error!',
        text: 'Course already selected!',
        icon: 'error',
        confirmButtonText: 'close'
      });
    } else {
      selectedCourses.forEach(c => credits += c.credit);

      const totalRemaining = 20 - credits;
 localStorage.re
      if (credits > 20) {
        return Swal.fire({
          title: 'Error!',
          text: 'Credit finished!',
          icon: 'error',
          confirmButtonText: 'close'
        });
      } else {
        setTotalCreditHours(credits);
        setRemainingCreditHours(totalRemaining);
        setSelectedCourses([...selectedCourses, course]);
      }
    }
  }
  return (
    <>
      <div className='lg:flex mt-24 container mx-auto'>

        <div className="grid-cols-3 space-y-5 lg:space-y-0 lg:gap-5 m-1 lg:grid">
          {loading ? <h1 className="text-xl md:text-9xl font-bold flex items-center ml-32 min-h-screen">Loading...</h1> :
            courses.map(course => <Course key={course.id} selectCourse={selectCourse} course={course}></Course>)
          }
        </div>
        <select name="" id=""></select>
        <Info selectedCourses={selectedCourses} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours} />
      </div>
    </>
  );
};
export default Courses;