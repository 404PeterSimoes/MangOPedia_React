import { useState } from 'react';

function Rating(value = 0, size = 'medium', onChange = null) {
  const [hover, setHover] = useState(0);
  const isInteractive = !!onChange;
  const sizeClass =
    size === 'small' ? 'fs-6' : size === 'large' ? 'fs-4' : 'fs-5';

  const renderStar = (index) => {};

  return <i class="bi bi-star-half"></i>;
}

export default Rating;
