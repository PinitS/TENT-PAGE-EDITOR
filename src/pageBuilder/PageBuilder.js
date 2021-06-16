import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import IMG from './components/IMG';
import TextAndYoutube from './components/TextAndYoutube';
import Title from './components/Title';
import Youtube from './components/Youtube';

export default function PageBuilder() {
  const funnelID = 213;
  const [registerData, setRegisterData] = useState([]);
  const [isOpenEditor, setIsOpenEditor] = useState(false);

  const registerComponent = (e) => {
    const type = e.target.getAttribute('data');
    const register = { type: type, value: {} }
    console.log('register :>> ', register);
    setRegisterData([...registerData, register]);
    console.log('registerData :>> ', registerData);
  }

  const getPositionUpByIndex = (index, positon) => {
    console.log('index :>> ', index);
    console.log('positon :>> ', positon);
    console.log('registerData :>> ', registerData);
    swapPosition(index, positon);
  }

  const getPositionDownByIndex = (index, positon) => {
    console.log('index :>> ', index);
    console.log('positon :>> ', positon);
    console.log('registerData :>> ', registerData);
    swapPosition(index, positon);
  }

  const swapPosition = (index, position) => {
    const casePosition = (position === 'Up' ? 1 : -1);
    const newStateSwap = [...registerData];
    const commentIndex = index;
    if (commentIndex === 0 && position === 'Up') {
      console.log('fail :>> ');
    } else if (commentIndex === newStateSwap.length - 1 && position === 'Down') {
      console.log('fail :>> ');
    }
    else {
      let tmp = newStateSwap[commentIndex];
      newStateSwap[commentIndex] = newStateSwap[commentIndex - casePosition];
      newStateSwap[commentIndex - casePosition] = tmp
      const newSwap = newStateSwap;
      setRegisterData(newSwap);
    }
  }

  return (
    <div>
      <p>PageBuilder</p>
      <div>
        {registerData.map((item, index) => {
          switch (item.type) {
            case 'youtube':
              return <Youtube
                getPositionDownByIndex={getPositionDownByIndex}
                getPositionUpByIndex={getPositionUpByIndex}
                index={index}
                positionDown={'Down'}
                positionUp={'Up'}
                key={index}>
              </Youtube>;
            case 'title':
              return <Title
                getPositionDownByIndex={getPositionDownByIndex}
                getPositionUpByIndex={getPositionUpByIndex}
                index={index}
                positionDown={'Down'}
                positionUp={'Up'}
                key={index}>
              </Title>;
            case 'img':
              return <IMG getPositionDownByIndex={getPositionDownByIndex}
                getPositionUpByIndex={getPositionUpByIndex}
                index={index}
                positionDown={'Down'}
                positionUp={'Up'}
                key={index}>
              </IMG>;
            case 'TextAndYoutube':
              return <TextAndYoutube getPositionDownByIndex={getPositionDownByIndex}
                getPositionUpByIndex={getPositionUpByIndex}
                index={index}
                positionDown={'Down'}
                positionUp={'Up'}
                key={index}>
              </TextAndYoutube>;
            default:
          }
          return undefined;
        })}
      </div>
      <div>
        <button onClick={() => { setIsOpenEditor(!isOpenEditor); }}>OpenEditor</button>
      </div>
      {isOpenEditor &&
        <div>
          editor
          <button data={"youtube"} onClick={(e) => { registerComponent(e) }} >youtube</button>
          <button data={"title"} onClick={(e) => { registerComponent(e) }} >title</button>
          <button data={"img"} onClick={(e) => { registerComponent(e) }} >img</button>
          <button data={"TextAndYoutube"} onClick={(e) => { registerComponent(e) }} >TextAndYoutube</button>
          {/* <button onClick={() => {
            localStorage.setItem("initialElements", JSON.stringify(dataState));
          }} >Save </button> */}
          {/* <button onClick={() => { setDataState(JSON.parse(localStorage.getItem("initialElements"))) }} >Load</button> */}
          {/* <button onClick={() => { setDataState([]); }} >empty</button> */}
        </div>}

    </div>
  )
}
