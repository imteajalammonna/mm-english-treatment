import './App.css';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
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
    <div>
      <Navbar />
      <div className='container mx-auto mt-32'>
      <div className='lg:flex'>
        <Courses courses={courses} selectCourse={selectCourse}
        />
        <Info selectedCourses={selectedCourses} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours} />
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
