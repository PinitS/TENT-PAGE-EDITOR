import React from 'react'

export default function Youtube(props) {
  console.log('props :>> ', props);
  return (
    <div style={{background:"yellow"}}>
      <p>{props.index}</p>
      <p>===============</p>
      <button onClick={() => { props.getPositionUpByIndex(props.index, props.positionUp) }}>up</button>
      <button onClick={() => { props.getPositionDownByIndex(props.index, props.positionDown) }}>down</button>
      <p>Youtube</p>
      <p>===============</p>
    </div>
  )
}
