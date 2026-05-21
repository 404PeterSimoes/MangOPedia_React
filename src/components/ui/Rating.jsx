import { useState } from 'react';

function Rating(value = 0, size = 'medium', onChange = null) {
  const [hover, setHover] = useState(0);
  const isInteractive = !!onChange;
  const sizeClass =
    size === 'small' ? 'fs-6' : size === 'large' ? 'fs-4' : 'fs-5';

  const renderStar = (index) => {
    const rating = isInteractive ? hover || value : value;
    const isFilled = index <= rating;
    const roundedRating = Math.round(rating * 2) / 2; // round to the nearest 0.5
    const isHalf =
      !isInteractive &&
      roundedRating % 1 === 0.5 &&
      index === Math.ceil(roundedRating);
  };

  return <i class="bi bi-star-half"></i>;
}

export default Rating;
