import React from 'react';
import Slider from '@material-ui/core/Slider';

import Polygon from 'components/polygon/polygon';
import TestQuestion from 'components/test-question/test-question';

// Types: TEST, DRAW, RAIN
const testQuestionSample = {
  type: 'TEST',
  title: 'Select the pentagon',
  answers: [
    { sides: 4, color: 'blue' },
    { sides: 5, color: 'blue' },
    { sides: 7, color: 'blue' },
    { sides: 3, color: 'blue' }
  ],
  correct: 1
};

export default class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polygonSides: 3
    };
  }

  handleChange(event, newValue) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.polygonSides = newValue;

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <svg height={300} width={300} style={{ background: 'grey' }}>
          <Polygon
            height={300} 
            width={300} 
            sides={this.state.polygonSides}
            fill="blue"
          />
        </svg>
        <Slider
          value={this.state.polygonSides}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={3}
          max={30}
          onChange={(event, newValue) => this.handleChange(event, newValue)}
        />
        <TestQuestion
          question={testQuestionSample}
        />
      </div>
    );
  }
}
