import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import cleanDweet from './cleanDweet'


const Background = styled.canvas`
  position: absolute;
  top: 50%; right: 50%;
  transform: translate(50%,-50%);
  z-index: -1;
  border: 1px solid #000;
`

console.log(DweetBackground1)



const DweetBackground1 = ({ dweet }) => {
  const canvasEl = useRef(null)

  useEffect(() => {
    if (canvasEl.current !== null) {
      cleanDweet(canvasEl.current)()
    }
  }, [canvasEl.current])

  return (
    <Background ref={canvasEl}>
    </Background>
  )
}


export default DweetBackground1

