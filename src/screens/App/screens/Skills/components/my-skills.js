import React, { useRef, useState, useEffect, useCallback } from 'react'
import { render } from 'react-dom'
import { useTransition, animated } from 'react-spring'
import {Keyframes} from 'react-spring/renderprops'


function MySkills() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    // from: { transform: 'perspective(0px) rotate(90deg)'},
    // enter: { transform: 'perspective(600px) rotate(90deg)' },
    // leave: { transform: 'perspective(0px) rotate(0deg)' },
    from: { transform: 'translate3d(0,-800px,0)' },
    enter: { transform: 'translate3d(0,500px,0)' },
    leave: {transform: 'rotate(-90deg)' },
    // config: { duration: 3500 },
//     from: [
//         { transform: 'translate3d(0, 0px,0)'},
//         { transform:'rotate(90deg)'}
//   ],
//     enter: { transform: 'translate3d(0, 800px,0)' },
//     leave: { transform: 'translate3d(0,100%,0)' },
    config: { duration: 3000 },
  })

  const reset = useCallback(() => {
    // ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setInterval(() => set(['Javascript']), 5000))
    ref.current.push(setInterval(() => set(['Rails']), 5000))
    ref.current.push(setInterval(() => set(['PostgreSQL']), 5000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div className="falling-skills">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} >
          <animated.div style={{ transform: 'rotate(90deg)', overflow: 'hidden', height: innerHeight, margin: '20px' }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default MySkills;
