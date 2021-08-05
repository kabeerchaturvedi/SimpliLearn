import React from "react";
import { useState, useEffect } from "react";
import "../components/courseList.css";
import { useHistory } from "react-router-dom";

const myStyle = {
  width: "200px",
};
function CoursesList() {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getCoursesList();
  }, []);

  function getCoursesList() {
    const fetchData = () => {
      fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json"
      )
        .then((response) => response.json())

        .then((data) => setCourses(data));
    };

    fetchData();
  }
  return (
    <div className="main-div">
      {courses &&
        courses.map((course) => {
          return (
            <div className="card-div">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <div classNameName="img-div">
                    <img
                      src={course.thumbnailURL}
                      classNameName="card-img-top"
                      alt="..."
                      style={myStyle}
                    />
                  </div>

                  <p className="card-text"> Price : {course.price}</p>
                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={(event) =>
                        history.push(
                          `/booking-confirmations/${course.id}/${course.price}/${course.title}`
                        )
                      }
                    >
                      Book Course
                    </button>
                  </div>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href={course.videoLink} className="card-link">
                    videoLink
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CoursesList;
