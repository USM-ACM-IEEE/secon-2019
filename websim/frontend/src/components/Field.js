import React from 'react';

function Field() {
  return (
    <g>
      {/* Background */}
      <rect x={25.4} y={25.4} width={97 * 25.4} height={97 * 25.4} style={{fill: '#FFFFFF'}} />

      {/* Carpet */}
      <rect x={25.4} y={25.4} width={95 * 25.4} height={95 * 25.4} style={{fill: '#202020'}} />

      {/* Cross */}
      <rect y={240} x={-25.4 + 95/2 * 25.4} height={1000} width={2*25.4} style={{fill: '#FF0000'}} />
      <rect y={240} x={25.4 + 95/2 * 25.4} height={1000} width={2*25.4} style={{fill: '#FFFFFF'}} />

      <rect x={25.4 + 95/2 * 25.4} y={-25.4 + 95/2 * 25.4} width={1000} height={2*25.4} style={{fill: '#00FF00'}} />
      <rect x={25.4 + 95/2 * 25.4} y={25.4 + 95/2 * 25.4} width={1000} height={2*25.4} style={{fill: '#FFFFFF'}} />

      <rect y={25.4 + 95/2 * 25.4} x={-25.4 + 95/2 * 25.4} height={1000} width={2*25.4} style={{fill: '#FFFFFF'}} />
      <rect y={25.4 + 95/2 * 25.4} x={25.4 + 95/2 * 25.4} height={1000} width={2*25.4} style={{fill: '#0000FF'}} />

      <rect x={240} y={-25.4 + 95/2 * 25.4} width={1000} height={2*25.4} style={{fill: '#FFFFFF'}} />
      <rect x={240} y={25.4 + 95/2 * 25.4} width={1000} height={2*25.4} style={{fill: '#FFFF00'}} />

      {/* Outer Circle */}
      <circle cx={25.4 + 95/2 * 25.4} cy = {25.4 + 95/2 * 25.4} r={1000} stroke='#FFFFFF' stroke-width={25.4} fill-opacity={0} />

      {/* Center */}
      <g transform = {'translate(' + (25.4 + 95/2 * 25.4) + ', ' + (25.4 + 95/2 * 25.4) + ') rotate(45)'}>
        <rect x={0-120} y={0-120} width={20} height={230} style={{fill: '#FF0000'}} />
        <rect x={10-120} y={0-120} width={230} height={20} style={{fill: '#00FF00'}} />
        <rect x={230-120-10} y={10-120} width={20} height={230} style={{fill: '#0000FF'}} />
        <rect x={0-120} y={230-120-10} width={230} height={20} style={{fill: '#FFFF00'}} />
        <rect x={20-120} y={20-120} width={200} height={200} style={{fill: '#202020'}} />
      </g>

      {/* Red Corner */}
      <rect x={25.4} y={25.4} width={300 + 2 * 25.4} height={300 + 2 * 25.4} fill='#FFFFFF' />
      <rect x={25.4} y={25.4} width={300} height={300} fill='#202020' />
      <rect x={25.4} y={25.4} width={2 * 25.4} height={2 * 25.4} style={{fill: '#FF0000'}} />

      {/* Green Corner */}
      <rect x={94*25.4 - 300} y={25.4} width={300 + 2 * 25.4} height={300 + 1.88 * 25.4} fill='#FFFFFF' />
      <rect x={96*25.4 - 300} y={25.4} width={300} height={300} fill='#202020' />
      <rect x={94 * 25.4} y={25.4} width={2 * 25.4} height={2 * 25.4} style={{fill: '#00FF00'}} />

      {/* Blue Corner */}
      <rect x={94*25.4 - 300} y={94*25.4 - 300} width={300 + 2 * 25.4} height={300 + 1.88 * 25.4} fill='#FFFFFF' />
      <rect x={96*25.4 - 300} y={96*25.4 - 300} width={300} height={300} fill='#202020' />
      <rect x={94 * 25.4} y={94 * 25.4} width={2 * 25.4} height={2 * 25.4} style={{fill: '#0000FF'}} />

      {/* Corners */}
      <rect x={25.4} y={94*25.4 - 300} width={300 + 2 * 25.4} height={300 + 1.88 * 25.4} fill='#FFFFFF' />
      <rect x={25.4} y={96*25.4 - 300} width={300} height={300} fill='#202020' />
      <rect x={25.4} y={94 * 25.4} width={2 * 25.4} height={2 * 25.4} style={{fill: '#FFFF00'}} />
    </g>
  )
}

export default Field;
