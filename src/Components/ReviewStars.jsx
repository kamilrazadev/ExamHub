import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ReviewStars = ({ rating }) => {
  const maxStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill key={i} className="star-filled" />);
      } else if (i - 1 < rating && rating % 1 !== 0) {
        stars.push(<BsStarHalf key={i} className="star-half" />);
      } else {
        stars.push(<BsStar key={i} className="star-empty" />);
      }
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default ReviewStars;
