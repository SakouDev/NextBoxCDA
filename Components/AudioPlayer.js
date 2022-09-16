import React, { useEffect, useRef } from 'react'

export default function AudioPlayer({props}) {
  console.log(props, '==== props');


  const ref = useRef()

  console.log(ref);

  useEffect(() => {
        ref.current.play(props.src);
  }, [props.src])

  return (
    <>
        <audio src ={`assets/music/${props.src}`} ref={ref} controls></audio>
    </>
  )
}
