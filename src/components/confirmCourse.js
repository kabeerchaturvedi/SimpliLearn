import React, { Component } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

function ConfirmCourseDetails() {
  const [cardDetails, setCardDetails] = useState({
    card: "",
    cvv: "",
  });
  let { courseId, price, name } = useParams();
  const history = useHistory();
  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setCardDetails({ ...cardDetails, [name]: value });
  };

  const user = JSON.parse(localStorage.getItem("userDetails")) || [];
  return (
    <div>
      <h3>Booking Course Details</h3>

      <div>
        <div>
          <div className="container">
            <div className="table">
              <span>Course Name:</span>
              <span>{name}</span>
              <div>
                <span>Price:</span>
                <span>{price}</span>
              </div>
            </div>
            <form className="form">
              <h3>Card Details</h3>

              <label>
                <p>Card Number</p>
                <input
                  type="number"
                  name="card"
                  id="number"
                  autoComplete="off"
                  value={cardDetails.card}
                  onChange={handleInput}
                />
              </label>
              <label>
                <p>CVV</p>
                <input
                  type="number"
                  name="cvv"
                  id="number"
                  autoComplete="off"
                  value={cardDetails.cvv}
                  onChange={handleInput}
                />
              </label>
              <div>
                <button
                  type="submit"
                  onClick={(event) => history.push(`/validate/${courseId}`)}
                  className="btn btn-danger"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCourseDetails;
