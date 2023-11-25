import React from 'react';

const testArt = ({ color1, color2, color3 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 14 18" shape-rendering="crispEdges">
      <rect width="100%" height="100%" fill={backgroundColor} />
      <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
      <path stroke={color1} d="M4 1h5M3 2h9M5 8h1M5 9h1M8 9h1M5 10h4M4 11h1M6 11h2M9 11h1M4 12h6M3 13h8M3 14h3M8 14h3" />
      <path stroke={color2} d="M3 3h3M8 3h1M2 4h1M4 4h1M8 4h1M2 5h1M4 5h2M9 5h1M2 6h2M8 6h4M3 8h2M6 8h3M2 9h3M6 9h2M9 9h3M1 10h4M9 10h4M3 11h1M10 11h1M2 15h3M9 15h3M1 16h4M9 16h4" />
      <path stroke={color3} d="M6 3h2M9 3h1M3 4h1M5 4h3M9 4h3M3 5h1M6 5h3M10 5h3M4 6h4M4 7h7M1 11h2M5 11h1M8 11h1M11 11h2M1 12h3M10 12h3M1 13h2M11 13h2" />
    </svg>
  );
};

export default testArt;
