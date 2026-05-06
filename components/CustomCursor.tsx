'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')
    const curR = document.getElementById('cur-r')

    const move = (e: MouseEvent) => {
      if (cur) {
        cur.style.left = e.clientX + 'px'
        cur.style.top = e.clientY + 'px'
      }
      setTimeout(() => {
        if (curR) {
          curR.style.left = e.clientX + 'px'
          curR.style.top = e.clientY + 'px'
        }
      }, 90)
    }

    const grow = () => {
      if (cur) cur.style.transform = 'translate(-50%, -50%) scale(1.8)'
      if (curR) curR.style.transform = 'translate(-50%, -50%) scale(1.4)'
    }
    const shrink = () => {
      if (cur) cur.style.transform = 'translate(-50%, -50%) scale(1)'
      if (curR) curR.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div id="cur" />
      <div id="cur-r" />
    </>
  )
}
