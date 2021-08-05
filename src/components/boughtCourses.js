import React, { Component } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const mystyle = {
  display: "flex",
  padding: "20px ",
  position: "relative",
  alignItems: "center",
};
const BoughtCourses = () => {
  const { courseId } = useParams();
  const history = useHistory();
  const [data, setData] = useState({
    otp: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setData({ ...data, [name]: value });
  };
  const validateOTP = () => {
    if (data.otp === "123456") {
      history.push(`/my-courses/${courseId}`);
    } else {
      alert("OTP incorrect");
    }
  };
  return (
    <div style={mystyle}>
      <div className="card border-success mb-3" style={{ maxWidth: "19rem" }}>
        <div className="card-header bg-transparent ">
          <h3>Courses Bought: </h3>
        </div>
        <table>
          <tr>
            <th>Course Name</th>
            <th>Booking amount</th>
          </tr>
          <tr>
            <td>Course.Name</td>
            <td>Booking amount </td>
          </tr>
        </table>
        <div className="card-footer bg-transparent border-success">
          <input
            type="number"
            name="otp"
            placeholder="Enter OTP"
            value={data.otp}
            onChange={handleInput}
          />
          <div>
            <button
              type="submit"
              onClick={validateOTP}
              className="btn btn-danger"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoughtCourses;
