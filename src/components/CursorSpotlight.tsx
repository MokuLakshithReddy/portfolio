import { useEffect, useRef } from 'react'

/**
 * A low-cost pointer light for fine-pointer devices.
 * The pointer position is written directly to CSS variables so React does not
 * re-render on every mouse movement.
 */
export function CursorSpotlight() {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = layerRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')

    if (!layer || reducedMotion.matches || !finePointer.matches) return

    let frame = 0

    const hide = () => {
      layer.style.opacity = '0'
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return

      const bounds = layer.getBoundingClientRect()
      const isInside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom

      if (!isInside) {
        hide()
        return
      }

      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        layer.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`)
        layer.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`)
        layer.style.opacity = '1'
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('blur', hide)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', hide)
    }
  }, [])

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[6] opacity-0 transition-opacity duration-300"
      style={{
        background:
          'radial-gradient(360px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(7, 85, 245, 0.105), transparent 72%)',
      }}
    />
  )
}
