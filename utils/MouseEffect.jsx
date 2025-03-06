'use client'
import { useState, useEffect } from 'react'

const useMouseEffect = (hovering, containerRef) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePosition = (event) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        let x = event.clientX - containerRect.left - 20
        let y = event.clientY - containerRect.top - 20

        x = Math.max(0, Math.min(x, containerRect.width - 40))
        y = Math.max(0, Math.min(y, containerRect.height - 40))

        setPosition({ x, y })
      }
    }

    if (hovering) {
      window.addEventListener('pointermove', handlePosition)
    }

    return () => {
      window.removeEventListener('pointermove', handlePosition)
    }
  }, [hovering, containerRef])

  return position
}

export default useMouseEffect
