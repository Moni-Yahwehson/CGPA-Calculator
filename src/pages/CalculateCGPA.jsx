import { useState } from "react";
import CourseForm from "../components/features/CourseForm";
import CourseList from "../components/features/CourseList";
const grades = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

const CGPACalculator = () => {
  const [courses, setCourses] = useState([]);

  const handleAddCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((course, i) => i !== index);
    setCourses(updatedCourses);
  };

  const calculateCGPA = () => {
    let totalGrades = 0;
    let totalCredit = 0;

    courses.forEach((course) => {
      totalGrades += grades[course.grade] * course.credits;
      totalCredit += course.credits;
    });

    return totalCredit === 0 ? 0 : totalGrades / totalCredit;
  };
  return (
    <div className="container">
      <h1 className="text-center">Calculate CGPA</h1>
      <CourseForm handleAddCourse={handleAddCourse} />
      <CourseList courses={courses} handleDeleteCourse={handleDeleteCourse} />
      <h2 className="text-center">CGPA: {calculateCGPA()}</h2>
      <p>Welcome</p>
    </div>
  );
};

export default CGPACalculator;