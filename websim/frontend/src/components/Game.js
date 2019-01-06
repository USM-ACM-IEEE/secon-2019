import React from 'react';
import { Table } from 'react-bootstrap';

import Field from './Field';
import DebrisField from './DebrisField';

function Robot(props) {
  return (
    <g transform = {'translate(' + props.x + ', ' + props.y + ') rotate(' + props.a + ')'}>
      <rect x={-9/2 * 25.4} y={-9/2 * 25.4} width={9*25.4} height={9*25.4} stroke-width={5} stroke='#000000' style={{fill: '#FF00FF'}} />
      <polygon points='-40,20 40,20 0,-100' style={{fill: '#00FF00'}} />
    </g>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Initial State?

    this.state = {
      robotX: 96*25.4 - 150,
      robotY: 96*25.4 - 150,
      robotA: 0,
      debris: (new DebrisField).addDebris(8, (new DebrisField).addDebris(4, [], 'ball'), 'cube'),
    }
  }

  moveRobot(x, y, a) {
    let offset = {
      x: x*Math.cos(this.state.robotA * Math.PI/180) + y*Math.sin(this.state.robotA * Math.PI/180),
      y: x*Math.sin(this.state.robotA * Math.PI/180) - y*Math.cos(this.state.robotA * Math.PI/180),
    };

    // TODO: Move items when hit
    this.setState({
      robotX: this.state.robotX + offset.x,
      robotY: this.state.robotY + offset.y,
      debris: this.state.debris.map((debris) => {
        let currentDistance = {
          x: this.state.robotX - debris.x,
          y: this.state.robotY - debris.y,
        }
        currentDistance.d = Math.sqrt(currentDistance.x * currentDistance.x + currentDistance.y * currentDistance.y);

        // Too far away to worry about
        if (currentDistance.d > (9*25.4)) {
          return debris;
        }

        let futureDistance = {
          x: (this.state.robotX+offset.x) - debris.x,
          y: (this.state.robotY+offset.y) - debris.y,
        }
        futureDistance.d = Math.sqrt(futureDistance.x * futureDistance.x + futureDistance.y * futureDistance.y);

        // We are moving away anyways
        if (futureDistance.d > currentDistance.d) {
          return debris;
        }

        // TODO: Real collision detection
        if (currentDistance.d < (6*25.4)) {
          return {
            ...debris,
            x: debris.x + x*Math.cos(this.state.robotA * Math.PI/180) + y*Math.sin(this.state.robotA * Math.PI/180),
            y: debris.y + x*Math.sin(this.state.robotA * Math.PI/180) - y*Math.cos(this.state.robotA * Math.PI/180),
          }
        }

        return debris;
      })
    });
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {

        // Translation
        case 'q':
          this.moveRobot(-10, 10, 0);
          break;
        case 'w':
          this.moveRobot(0, 10, 0);
          break;
        case 'e':
          this.moveRobot(10, 10, 0);
          break;
        case 'a':
          this.moveRobot(-10, 0, 0);
          break;
        case 's':
          this.moveRobot(0, -10, 0);
          break;
        case 'd':
          this.moveRobot(10, 0, 0);
          break;

        case 'z':
          this.moveRobot(-10, -10, 0);
          break;
        case 'c':
          this.moveRobot(10, -10, 0);
          break;

        // Rotation
        case 'r':
          this.setState({
            robotA: (this.state.robotA - 1) % 360,
          });
          break;
        case 'v':
          this.setState({
            robotA: (this.state.robotA + 1) % 360,
          });
          break;
      }
    })
  }

  render() {
    return <div>
      <center>
        <h1>SouthEastCon 2019 Hardware Competition Simulator</h1>

        {/* Field */}
        <svg width='1000' height='1000' viewBox='0 0 2500 2500'>
          <Field />
          <DebrisField debris={this.state.debris} />
          <Robot x={this.state.robotX} y={this.state.robotY} a={this.state.robotA} />
        </svg>

        <hr/>

        <h2>Key Bindings</h2>
        <p>wasd - Standard movement</p>
        <p>qezc - Diagonal movement</p>
        <p>rv - Rotation</p>

        <hr/>

        <h3>Robot Telemetry</h3>
        <Table striped bordered condensed style={{width: '250px'}} >
          <tbody>
            <tr>
              <td>X</td><td>{this.state.robotX}</td>
            </tr>
            <tr>
              <td>Y</td><td>{this.state.robotY}</td>
            </tr>
            <tr>
              <td>Heading</td><td>{this.state.robotA}</td>
            </tr>
          </tbody>
        </Table>
      </center>
    </div>
  }
}

export default Game;
