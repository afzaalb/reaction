import React from 'react';

const Circle = ({width, height}) => (
  <div
    className="d-inline-block s-circle bg-primary"
    style={{width:`${width}px`, height:`${height}px`, lineHeight:`${width}px`}}>
    Circle
  </div>
);

export default Circle;
