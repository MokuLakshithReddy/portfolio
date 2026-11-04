import React, { useState, useEffect } from 'react'
import { Wifi, WifiOff, Zap } from 'lucide-react'

const formatDateTime = (date: Date): string => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  const day = date.getDate()
  const year = date.getFullYear()
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
  return `${weekday}, ${month} ${day}, ${year} ${time}`
}

export const StatusBar: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>(() => formatDateTime(new Date()))
  const [batteryLevel, setBatteryLevel] = useState<number>(85)
  const [isCharging, setIsCharging] = useState<boolean>(false)
  const [isOnline, setIsOnline] = useState<boolean>(() => typeof navigator !== 'undefined' ? navigator.onLine : true)

  useEffect(() => {
    // 1. Live ticking clock
    const timer = setInterval(() => {
      setCurrentDateTime(formatDateTime(new Date()))
    }, 1000)

    // 2. Network status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // 3. Battery API (if supported by browser)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nav = navigator as any
    if (nav && typeof nav.getBattery === 'function') {
      nav.getBattery().then((battery: {
        level: number
        charging: boolean
        addEventListener: (event: string, fn: () => void) => void
        removeEventListener: (event: string, fn: () => void) => void
      }) => {
        const updateBattery = () => {
          setBatteryLevel(Math.round(battery.level * 100))
          setIsCharging(battery.charging)
        }
        updateBattery()
        battery.addEventListener('levelchange', updateBattery)
        battery.addEventListener('chargingchange', updateBattery)
      }).catch(() => {})
    }

    return () => {
      clearInterval(timer)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

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
          <svg className="w-3.5 h-3.5 fill-[#111111] relative -top-[1px]" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.38c.62-.75 1.04-1.8.93-2.85-.9.04-1.98.6-2.61 1.34-.56.65-1.05 1.71-.92 2.72 1 .08 2.02-.51 2.6-1.21z" />
          </svg>
          <span className="font-semibold tracking-tight text-[12.5px]">Lakshith Reddy</span>
        </div>
      </div>

      {/* Right status items */}
      <div className="flex items-center gap-3 font-normal text-[12px] text-[#222222]">
        <span className="tabular-nums font-mono-tech sm:font-sans">{currentDateTime}</span>
        
        {/* Wifi */}
        <span title={isOnline ? 'Connected' : 'Offline'}>
          {isOnline ? (
            <Wifi className="w-3.5 h-3.5 stroke-[2.2] text-[#111111]" />
          ) : (
            <WifiOff className="w-3.5 h-3.5 stroke-[2.2] text-red-600" />
          )}
        </span>

        {/* Battery */}
        <div className="flex items-center gap-1" title={`${batteryLevel}% ${isCharging ? '(Charging)' : ''}`}>
          <div className="flex items-center gap-0.5">
            <div className="w-[20px] h-[10.5px] border border-[#111111] rounded-[2.5px] p-[1.5px] flex items-center relative">
              <div 
                className="h-full bg-[#111111] rounded-[1px] transition-all duration-300"
                style={{ width: `${Math.max(10, Math.min(100, batteryLevel))}%` }}
              />
              {isCharging && (
                <Zap className="w-2.5 h-2.5 text-[#FFBD2E] fill-[#FFBD2E] absolute inset-0 m-auto" />
              )}
            </div>
            <div className="w-[1.5px] h-[4px] bg-[#111111] rounded-r-[1px]" />
          </div>
        </div>
      </div>
    </header>
  )
}
