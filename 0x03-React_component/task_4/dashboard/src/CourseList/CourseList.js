import React from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
        <thead>
            <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />  
        </thead>
        <tbody>
            {listCourses.length > 0 ? (
              listCourses.map((course) => (
                <CourseListRow
                  key={course.id}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                  isHeader={false}
                />
              ))
            ) : (
              <CourseListRow textFirstCell="No course available yet" textSecondCell={null} isHeader={false} />
            )}
        </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;