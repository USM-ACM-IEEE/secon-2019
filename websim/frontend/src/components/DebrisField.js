import React from 'react';

class DebrisField extends React.Component {
  addDebris(count, debrisField = [], type = 'cube') {
    let colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

    for (let i = 0; i < count; i++) {
      let done = true;
      let x = 0;
      let y = 0;

      do {
        let theta = 2*Math.PI*Math.random();
        let r = 750*Math.random() + 200;

        x = r*Math.sin(theta) + 25.4 + 95/2 * 25.4;
        y = r*Math.cos(theta) + 25.4 + 95/2 * 25.4;

        done = true;
        debrisField.forEach((item) => {
          let distance = Math.sqrt((x-item.x)*(x-item.x) + (y-item.y)*(y-item.y));
          if (distance < 400) {
            done = false;
          }
        });

      } while (!done);

      debrisField.push({
        x,
        y,
        a: 360*Math.random(),
        type,
        color: colors[i%4],
      });
    }

    return debrisField;
  }

  render() {
    return(
      <g>
        {
          this.props.debris.map((debris) => {
            if (debris.type === 'cube') {
              return (
                <g transform={'translate(' + debris.x + ', ' + debris.y + ') rotate(' + debris.a + ')'} >
                  <rect x={-25.4} y={-25.4} width={2*25.4} height={2*25.4} stroke-width={5} stroke='#000000' fill={debris.color} />
                </g>
              );
            } else {
              return (
                <g transform={'translate(' + debris.x + ', ' + debris.y + ') rotate(' + debris.a + ')'} >
                  <circle cx={0} cy={0} r={2.5/2*25.4} stroke-width={5} stroke='#000000' fill={debris.color} />
                </g>
              )
            }
          })
        }
      </g>
    )
  }
}

export default DebrisField;
