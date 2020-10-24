import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CourseList() {
  const courses = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [newCourse, setNewCourse] = useState();

  function addCourse() {
    dispatch({ type: "ADD_COURSE", title: newCourse });
    setNewCourse("");
  }

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}> {course}</li>
        ))}
        <form>
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <button type="button" onClick={addCourse}>
            Adicionar Curso
          </button>
        </form>
      </ul>
    </>
  );
}
