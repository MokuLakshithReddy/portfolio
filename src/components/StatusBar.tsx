import React from 'react'
import { Wifi } from 'lucide-react'

export const StatusBar: React.FC = () => {
  return (
    <header className="w-full h-[36px] bg-[#ECE4D4]/90 border-b border-[#D8CEBD] px-4 md:px-6 flex items-center justify-between text-[#111111] text-[12px] font-sans select-none z-30 relative">
      {/* Left controls */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 mr-1">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block shadow-xs hover:opacity-80 transition-opacity cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block shadow-xs hover:opacity-80 transition-opacity cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block shadow-xs hover:opacity-80 transition-opacity cursor-pointer" />
        </div>
        <div className="h-3.5 w-[1px] bg-[#CFBFAB] mx-1" />
        
        {/* Apple icon */}
        <div className="flex items-center gap-1.5 ml-1">
          <svg className="w-3.5 h-3.5 fill-[#111111] relative -top-[0.5px]" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-7.48-11.41-13.1-24.16-16.86-38.25-3.76-14.09-5.64-27.18-5.64-39.27 0-14.28 3.49-26.17 10.47-35.67 6.98-9.49 15.82-14.34 26.51-14.54 4.58 0 9.87 1.25 15.87 3.75 6 2.5 10.02 3.8 12.07 3.91 1.63 0 5.86-1.39 12.69-4.17 6.83-2.77 12.58-4.04 17.25-3.8 12.74.87 22.86 5.66 30.37 14.37-11.1 6.74-16.54 16.09-16.32 28.05.22 9.46 3.91 17.29 11.08 23.49 7.18 6.2 15.7 9.88 25.56 11.04-2.18 6.52-4.9 12.83-8.16 18.93zM119.22 31.84c0-7.72 2.72-14.9 8.16-21.53 5.44-6.63 12.07-10.43 19.9-11.41.22 1.09.33 2.07.33 2.94 0 7.61-2.93 15.01-8.81 22.2-5.87 7.18-12.5 11.14-19.89 11.89-.1-1.3-.15-2.67-.15-4.09z" />
          </svg>
          <span className="font-semibold tracking-tight text-[12.5px]">Lakshith Reddy</span>
        </div>
      </div>

      {/* Right status items */}
      <div className="flex items-center gap-3 font-normal text-[12px] text-[#222222]">
        <span>Mon, Nov 3, 2025 10:24 AM</span>
        
        {/* Wifi */}
        <Wifi className="w-3.5 h-3.5 stroke-[2.2] text-[#111111]" />

        {/* Battery */}
        <div className="flex items-center gap-0.5">
          <div className="w-[20px] h-[10.5px] border border-[#111111] rounded-[2.5px] p-[1.5px] flex items-center">
            <div className="h-full w-[80%] bg-[#111111] rounded-[1px]" />
          </div>
          <div className="w-[1.5px] h-[4px] bg-[#111111] rounded-r-[1px]" />
        </div>
      </div>
    </header>
  )
}

