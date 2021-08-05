import React, { Component } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MyCourses() {
  let { courseId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getCoursesList();
  }, []);

  function getCoursesList() {
    const fetchData = () => {
      fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json"
      )
        .then((response) => response.json())

        .then((data) => {
          const details = data.find((course) => course.id === courseId);

          setData(details);
          console.log(details);
        });
    };

    fetchData();
  }

  return (
    <div>
      {data?.videoLink &&
        data.videoLink.map((val) => (
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${val.split("/")[3]}`}
            frameborder="0"
          ></iframe>
        ))}
    </div>
  );
}

export default MyCourses;
