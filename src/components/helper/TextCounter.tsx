'use client'
import React, { useEffect } from 'react'

const TextCounter = (
  props: React.HTMLProps<HTMLDivElement> & {
    count: number
  }
) => {
  const [count, setCount] = React.useState(0)
  useEffect(() => {
    setCount(0)
    const maxTimer = props.count
    if (!isFinite(maxTimer)) {
      return
    }

    const duration = 1000 / maxTimer
    const timer = setInterval(() => {
      window.requestAnimationFrame(() => {
        setCount((x) => {
          if (x >= maxTimer) {
            clearInterval(timer)
            return x
          }
          return x + 1
        })
      })
    }, duration)

    return () => {
      clearInterval(timer)
    }
  }, [props.count])
  return <div {...props}>{count}</div>
}

export default TextCounter
