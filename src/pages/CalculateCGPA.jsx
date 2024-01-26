import { useState } from "react";

/* eslint-disable no-unused-vars */
const grades = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

function CalculateCGPA() {
  const [courses, setCourses] = useState([]);

  //Adding a course
  function handleAddCourse(newCourse) {
    setCourses([...courses, newCourse]);
  }

  //Editing a course
  function handleEditCourse(index, updatedCourse) {
    const updatedCourses = [...courses];
    updatedCourses[index] = updatedCourse;
    setCourses(updatedCourses);
  }

  //Deleting a course

  function handleDeleteCourse(index) {
    const updatedCourses = courses.filter((course, i) => i !== index);
    setCourses(updatedCourses);
  }

  //Calculating the CGPA

  const calculateGPA = function () {
    let totalGradePoints = 0;
    let totalCredits = 0;

    courses.forEach((course) =>{
      totalGradePoints += grades[course.grade] * course.
    })
  };
}

export default CalculateCGPA;
