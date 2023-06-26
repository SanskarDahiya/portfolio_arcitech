'use client'
import React, { useEffect, useRef } from 'react'

const TextCounter = (
  props: React.HTMLProps<HTMLDivElement> & {
    count: number
  }
) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = React.useState(false)
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (!divRef.current) return
    const elem = divRef.current
    const IntersectionObs = new IntersectionObserver((entries) => {
      if (entries[0]?.intersectionRatio !== 0) {
        IntersectionObs.unobserve(elem)
        setIsInView(true)
      }
    })

    IntersectionObs.observe(elem)
    return () => {
      IntersectionObs.unobserve(elem)
      IntersectionObs.disconnect()
    }
  }, [])

  useEffect(() => {
    setCount(0)
    const maxTimer = props.count
    if (!isInView || !isFinite(maxTimer)) {
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
  }, [props.count, isInView])

  return (
    <div ref={divRef} {...props}>
      {count}
    </div>
  )
}

export default TextCounter
