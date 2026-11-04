import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 border-t border-[#D8CEBD] bg-[#EBE2D3]/60 text-center font-mono-tech text-[12px] text-[#666666]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-[#333333]">
          <span className="font-bold">Lakshith Reddy</span>
          <span>·</span>
          <span>Designed &amp; Engineered with Passion</span>
        </div>
        <div>
          © {new Date().getFullYear()} Lakshith Reddy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

