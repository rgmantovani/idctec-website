import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CoursesPage.css";

const courses = [
  {
    id: 1,
    title: "Material 1",
    description: "Descrição breve dos módulos",
    author: "Guilherme Moreira",
    views: 5,
    date: "há 21 horas",
    image: "",
  },
  {
    id: 2,
    title: "Material 2",
    description: "Descrição breve do material 2",
    author: "Guilherme Moreira",
    views: 0,
    date: "há 21 horas",
    image: "",
  },
];

const CoursesPage = () => {
  const [courseViews, setCourseViews] = useState(courses);
  const navigate = useNavigate();

  useEffect(() => {
    const savedViews = JSON.parse(localStorage.getItem('courseViews') || '[]');
    if (savedViews.length > 0) {
      setCourseViews(savedViews);
    }
  }, []);

  const handleClickCourse = (id) => {
    setCourseViews((prevCourses) => {
      const updatedCourses = prevCourses.map((course) =>
        course.id === id
          ? { ...course, views: course.views + 1 }
          : course
      );
      localStorage.setItem('courseViews', JSON.stringify(updatedCourses)); // Salva as visualizações
      return updatedCourses;
    });

    navigate(`/courses/${id}`);
  };

  return (
    <div className="courses-container">
      {courseViews.map((course) => (
        <div
          key={course.id}
          className="course-card"
          onClick={() => handleClickCourse(course.id)}
        >
          <div className="course-image">
            {course.image ? (
              <img src={course.image} alt={course.title} />
            ) : (
              <div className="placeholder-icon">
                <span>📘</span>
              </div>
            )}
          </div>

          <div className="course-info">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <p className="course-author">{course.author}</p>
            <div className="course-stats">
              <span>{course.views} visualizações</span>
              <span>{course.time}</span>
            </div>
          </div>
        </div>

        

      ))}
    </div>
    
  );
};

export default CoursesPage;
