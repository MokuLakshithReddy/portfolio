import React, { useEffect } from 'react'
import { X, ExternalLink, Download } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc?: string
  title?: string
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc = '/images/folder_preview.jpg',
  title = 'portfolio_illustration.png — Quick Look'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Window */}
      <div
        className="relative max-w-4xl w-full bg-[#FAF5EC] rounded-[16px] shadow-2xl border border-[#222222]/30 overflow-hidden flex flex-col scale-in duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
        }}
      >
        {/* macOS Style Window Header */}
        <div className="h-10 bg-[#ECE3D2] border-b border-[#D8CEBD] px-4 flex items-center justify-between select-none">
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 hover:opacity-80 transition-opacity flex items-center justify-center group cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-2 h-2 text-black/70 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
          </div>

          {/* Window Title */}
          <div className="text-[12.5px] font-sans font-medium text-[#444444] truncate max-w-[260px] sm:max-w-md">
            {title}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 text-[#555555]">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-[#111111] hover:bg-black/5 rounded transition-colors"
              title="Open full size in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={imageSrc}
              download="portfolio_preview.jpg"
              className="p-1 hover:text-[#111111] hover:bg-black/5 rounded transition-colors"
              title="Download image"
            >
              <Download className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1 hover:text-[#111111] hover:bg-black/5 rounded transition-colors cursor-pointer ml-1"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Content Container */}
        <div className="p-3 sm:p-5 flex items-center justify-center bg-[#F5EFEB]/50 overflow-auto max-h-[calc(85vh-40px)]">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[72vh] w-auto max-w-full rounded-[8px] border border-[#D8CEBD] object-contain shadow-sm"
          />
        </div>

        {/* Footer info bar */}
        <div className="h-8 bg-[#ECE3D2]/70 border-t border-[#D8CEBD] px-4 flex items-center justify-between text-[11px] font-mono-tech text-[#666666] select-none">
          <span>Lakshith Reddy Portfolio Asset</span>
          <span>Click anywhere outside or press ESC to close</span>
        </div>
      </div>
    </div>
  )
}

