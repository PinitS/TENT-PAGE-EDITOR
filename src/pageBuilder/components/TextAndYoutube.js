import React from 'react'

export default function TextAndYoutube(props) {
  return (
    <div style={{background:"green"}}>
      <p>{props.index}</p>
      <p>===============</p>
      <button onClick={() => { props.getPositionUpByIndex(props.index, props.positionUp) }}>up</button>
      <button onClick={() => { props.getPositionDownByIndex(props.index, props.positionDown) }}>down</button>
      <p>TextAndYoutube</p>
      <p>===============</p>
    </div>
  )
}
