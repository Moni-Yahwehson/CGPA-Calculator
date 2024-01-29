import { useState } from "react";

const CourseForm = ({ onAddCourse }) => {
  const [courseName, setCourseName] = useState("");
  const [credits, setCredits] = useState(0);
  const [grade, setGrade] = useState("A");

  const handleAddCourse = () => {
    if (courseName && credits > 0 && grade) {
      const newCourse = {
        courseName,
        credits,
        grade,
      };

      onAddCourse(newCourse);
      setCourseName("");
      setCredits(0);
      setGrade("A");
    } else {
      alert("Please enter valid course details");
    }
  };
  return handleAddCourse;
};

export default CourseForm;
