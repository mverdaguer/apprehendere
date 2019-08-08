import React from 'react';

const calculatePoints = (sides, radius) => {
  if (sides < 3) {
    return;
  }

  const angle = (2 * Math.PI) / sides;

  let result = '';
  for (let i = 1; i <= sides; i++) {
    const currentX = radius * Math.sin(i * angle);
    const currentY = radius * -Math.cos(i * angle);

    result += ` ${currentX},${currentY}`;
  }

  return result;
};

export default class Polygon extends React.Component {
  render() {
    const radius = Math.min(this.props.width, this.props.height) / 2;
    const points = calculatePoints(this.props.sides, radius - 20);

    return (
      <polygon
        points={points}
        fill={this.props.fill}
        transform={`translate(${radius}, ${radius})`}
        onClick={this.props.onClick}
      />
    );
  }
}
