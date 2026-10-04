/** Pointer height adjustment for the composer's draft scrollport. */
import { useLayoutEffect, useRef, useState } from 'react'
import type { PointerEvent, RefObject } from 'react'
import css from './InputBar.module.css'

const HEIGHT_PREF_KEY = 'dsh.conversation.inputHeight'
const MIN_HEIGHT = 52

function readHeight(): number | null {
  const value = Number(localStorage.getItem(HEIGHT_PREF_KEY))
  return Number.isFinite(value) && value >= MIN_HEIGHT ? value : null
}

/**
 * Resize the draft from its top edge; double-click restores automatic growth.
 * @param props - Mounted draft scrollport.
 * @returns the card's top-edge resize control.
 */
export function ComposerHeightControl({ scrollRef }: {
  scrollRef: RefObject<HTMLDivElement>
}) {
  const [height, setHeight] = useState(readHeight)
  const drag = useRef<{ y: number; base: number; saved: number | null } | null>(null)
  useLayoutEffect(() => {
    const scroll = scrollRef.current
    if (scroll === null) return
    if (height === null) scroll.style.removeProperty('height')
    else scroll.style.height = `${height}px`
  }, [height, scrollRef])
  const clamp = (value: number) => Math.max(MIN_HEIGHT, Math.min(value, window.innerHeight * 0.6))
  const commit = (value: number | null) => {
    setHeight(value)
    if (value === null) localStorage.removeItem(HEIGHT_PREF_KEY)
    else localStorage.setItem(HEIGHT_PREF_KEY, String(value))
  }
  const cancel = () => {
    if (drag.current === null) return
    setHeight(drag.current.saved)
    drag.current = null
  }
  const move = (event: PointerEvent<HTMLDivElement>) => {
    const start = drag.current
    if (start === null || !event.currentTarget.hasPointerCapture(event.pointerId)) return
    setHeight(clamp(start.base + start.y - event.clientY))
  }
  return (
    <div
      className={css.heightHandle}
      data-composer-height-handle
      onPointerDown={(event) => {
        if (event.button !== 0 || scrollRef.current === null) return
        event.preventDefault()
        event.stopPropagation()
        event.currentTarget.setPointerCapture(event.pointerId)
        drag.current = { y: event.clientY, base: scrollRef.current.offsetHeight, saved: height }
      }}
      onPointerMove={move}
      onPointerUp={(event) => {
        const start = drag.current
        if (start === null || !event.currentTarget.hasPointerCapture(event.pointerId)) return
        drag.current = null
        if (start.y !== event.clientY) commit(clamp(start.base + start.y - event.clientY))
        else setHeight(start.saved)
        event.currentTarget.releasePointerCapture(event.pointerId)
      }}
      onPointerCancel={cancel}
      onLostPointerCapture={cancel}
      onClick={(event) => { event.stopPropagation() }}
      onDoubleClick={(event) => { event.stopPropagation(); commit(null) }}
    />
  )
}
