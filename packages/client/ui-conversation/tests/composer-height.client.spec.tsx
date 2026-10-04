// @vitest-environment jsdom
import { createRef } from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import { ComposerHeightControl } from '../src/client/skeleton/ComposerHeightControl.tsx'

const key = 'dsh.conversation.inputHeight'
afterEach(() => { cleanup(); localStorage.removeItem(key) })

function fixture() {
  const scrollRef = createRef<HTMLDivElement>()
  const view = render(<div>
    <div ref={scrollRef}>Draft text</div>
    <ComposerHeightControl scrollRef={scrollRef} />
  </div>)
  const scroll = scrollRef.current!
  const grip = view.container.querySelector<HTMLElement>('[data-composer-height-handle]')!
  let captured = false
  Object.defineProperties(grip, {
    setPointerCapture: { value: () => { captured = true } },
    hasPointerCapture: { value: () => captured },
    releasePointerCapture: { value: () => { captured = false } },
  })
  Object.defineProperty(scroll, 'offsetHeight', { get: () => Number.parseFloat(scroll.style.height) || 80 })
  const pointer = (type: string, y: number, button = 0) => {
    fireEvent(grip, new MouseEvent(type, { bubbles: true, clientY: y, button }))
  }
  return { view, scroll, grip, pointer }
}

it('resizes upward, persists, restores on remount and resets to automatic growth', () => {
  const first = fixture()
  first.pointer('pointerdown', 300)
  first.pointer('pointermove', 200)
  expect(first.scroll.style.height).toBe('180px')
  expect(localStorage.getItem(key)).toBeNull()
  first.pointer('pointerup', 200)
  expect(localStorage.getItem(key)).toBe('180')
  first.view.unmount()
  const second = fixture()
  expect(second.scroll.style.height).toBe('180px')
  fireEvent.doubleClick(second.grip)
  expect(second.scroll.style.height).toBe('')
  expect(localStorage.getItem(key)).toBeNull()
  expect(second.scroll.textContent).toBe('Draft text')
})

it('abandons cancelled and lost-capture gestures without saving intermediate sizes', () => {
  localStorage.setItem(key, '160')
  const { pointer, scroll } = fixture()
  for (const end of ['pointercancel', 'lostpointercapture']) {
    pointer('pointerdown', 300)
    pointer('pointermove', 220)
    expect(scroll.style.height).toBe('240px')
    pointer(end, 220)
    expect(scroll.style.height).toBe('160px')
    expect(localStorage.getItem(key)).toBe('160')
  }
})

it('bounds pointer resizing and ignores invalid stored preferences and secondary clicks', () => {
  localStorage.setItem(key, 'invalid')
  const { grip, pointer, scroll } = fixture()
  expect(scroll.style.height).toBe('')
  pointer('pointermove', 20)
  pointer('pointerdown', 300, 2)
  pointer('pointerup', 20)
  expect(scroll.style.height).toBe('')
  pointer('pointerdown', 100)
  pointer('pointerup', 1000)
  expect(scroll.style.height).toBe('52px')
  pointer('pointerdown', 300)
  pointer('pointerup', -3000)
  expect(Number.parseFloat(scroll.style.height)).toBe(window.innerHeight * 0.6)
  fireEvent.doubleClick(grip)
  expect(scroll.style.height).toBe('')
})
