import React from 'react'

export default function Title(props) {
  return (
    <div style={{background:"blue"}}>
      <p>{props.index}</p>
      <p>===============</p>
      <button onClick={() => { props.getPositionUpByIndex(props.index, props.positionUp) }}>up</button>
      <button onClick={() => { props.getPositionDownByIndex(props.index, props.positionDown) }}>down</button>
      <p>Title</p>
      <p>===============</p>
    </div>
  )
}
