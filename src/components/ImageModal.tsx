import React, { useEffect, useRef } from 'react'
import { X, ExternalLink, Download } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc?: string
  title?: string
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc = '/images/folder_preview.jpg',
  title = 'portfolio_illustration.png — Quick Look',
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const initialFocusRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    const previousBodyOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    initialFocusRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (!focusableElements?.length) {
        event.preventDefault()
        dialogRef.current?.focus()
        return
      }

      const first = focusableElements[0]
      const last = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (!dialogRef.current?.contains(activeElement)) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="image-preview-title"
        tabIndex={-1}
        className="relative max-w-4xl w-full bg-[#FAF5EC] rounded-[16px] shadow-2xl border border-[#222222]/30 overflow-hidden flex flex-col scale-in duration-200 focus:outline-none"
        onClick={(event) => event.stopPropagation()}
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)' }}
      >
        <div className="h-10 bg-[#ECE3D2] border-b border-[#D8CEBD] px-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
          </div>

          <h2
            id="image-preview-title"
            className="text-[12.5px] font-sans font-medium text-[#444444] truncate max-w-[260px] sm:max-w-md"
          >
            {title}
          </h2>

          <div className="flex items-center gap-2 text-[#555555]">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open full-size image in a new tab"
              className="p-1 hover:text-[#111111] hover:bg-black/5 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={imageSrc}
              download="portfolio_preview.jpg"
              aria-label="Download portfolio preview image"
              className="p-1 hover:text-[#111111] hover:bg-black/5 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <button
              ref={initialFocusRef}
              type="button"
              onClick={onClose}
              aria-label="Close image preview"
              className="p-1 hover:text-[#111111] hover:bg-black/5 rounded transition-colors cursor-pointer ml-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="p-3 sm:p-5 flex items-center justify-center bg-[#F5EFEB]/50 overflow-auto max-h-[calc(85vh-40px)]">
          <img
            src={imageSrc}
            alt="Portfolio illustration preview"
            className="max-h-[72vh] w-auto max-w-full rounded-[8px] border border-[#D8CEBD] object-contain shadow-sm"
          />
        </div>

        <div className="h-8 bg-[#ECE3D2]/70 border-t border-[#D8CEBD] px-4 flex items-center justify-between text-[11px] font-mono-tech text-[#666666] select-none">
          <span>Lakshith Reddy Portfolio Asset</span>
          <span>Press Escape or close this dialog to return to the page</span>
        </div>
      </div>
    </div>
  )
}
