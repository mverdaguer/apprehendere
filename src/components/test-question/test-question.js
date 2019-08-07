import React from 'react';
import Polygon from 'components/polygon/polygon';

export default class TestQuestion extends React.Component {
  onClick(i) {
    if (this.props.question.correct === i) {
      console.log("SWEET");
    } else {
      console.log("FAIL");
    }
  }

  render() {
    const question = this.props.question;

    const answers = question.answers.map((answer, i) =>
      <svg 
        height={300} 
        width={300} 
        style={{ background: 'grey' }}
        key={i}
      >
        <Polygon
          height={300} 
          width={300} 
          sides={answer.sides}
          fill={answer.color}
          onClick={() => this.onClick(i)}
        />
      </svg>
    );

    return (
      <div>
        <h1>{question.title}</h1>
        {answers}
      </div>      
    );
  }
}

