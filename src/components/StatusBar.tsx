import React, { useState, useEffect } from 'react'
import { Wifi, WifiOff, Zap } from 'lucide-react'
import { RetroAppleLogo } from './RetroAppleLogo'

const formatDateTime = (date: Date): string => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  const day = date.getDate()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const displayHours = hours % 12 || 12
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
  return `${weekday}, ${month} ${day}, ${year} ${displayHours}:${displayMinutes} ${ampm}`
}

interface BatteryManagerLike {
  level: number
  charging: boolean
  addEventListener: (event: 'levelchange' | 'chargingchange', listener: () => void) => void
  removeEventListener: (event: 'levelchange' | 'chargingchange', listener: () => void) => void
}

interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManagerLike>
}

export const StatusBar: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>(() => formatDateTime(new Date()))
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null)
  const [isCharging, setIsCharging] = useState<boolean>(false)
  const [isOnline, setIsOnline] = useState<boolean>(() => typeof navigator !== 'undefined' ? navigator.onLine : true)

  useEffect(() => {
    // 1. Live ticking clock updating every second
    const updateTime = () => setCurrentDateTime(formatDateTime(new Date()))
    updateTime()
    const timer = setInterval(updateTime, 1000)

    // 2. Network status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // 3. Battery API (progressively enhanced; omit the indicator when unavailable)
    const batteryNavigator = navigator as NavigatorWithBattery
    let battery: BatteryManagerLike | null = null
    let isMounted = true

    const updateBattery = () => {
      if (!battery || !isMounted) return
      setBatteryLevel(Math.round(battery.level * 100))
      setIsCharging(battery.charging)
    }

    const connectBattery = async () => {
      if (typeof batteryNavigator.getBattery !== 'function') return

      try {
        battery = await batteryNavigator.getBattery()
        if (!isMounted) return

        updateBattery()
        battery.addEventListener('levelchange', updateBattery)
        battery.addEventListener('chargingchange', updateBattery)
      } catch {
        // Battery information is optional. Do not invent a fallback percentage.
      }
    }

    void connectBattery()

    return () => {
      isMounted = false
      if (battery) {
        battery.removeEventListener('levelchange', updateBattery)
        battery.removeEventListener('chargingchange', updateBattery)
      }
      clearInterval(timer)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <header className="w-full h-[38px] bg-[#ECE4D4]/95 border-b border-[#D8CEBD] px-4 md:px-6 flex items-center justify-between text-[#111111] text-[13px] font-sans select-none z-30 relative shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      {/* Left controls */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 mr-1">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block shadow-xs hover:opacity-80 transition-opacity cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block shadow-xs hover:opacity-80 transition-opacity cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block shadow-xs hover:opacity-80 transition-opacity cursor-pointer" />
        </div>
        <div className="h-3.5 w-[1px] bg-[#CFBFAB] mx-1" />
        
        {/* Retro Apple icon & name */}
        <div className="flex items-center gap-2 ml-1">
          <RetroAppleLogo className="w-[14px] h-[15px] text-[#111111] relative -top-[0.5px]" />
          <span className="font-semibold tracking-tight text-[12.5px] text-[#111111]">Lakshith Reddy</span>
        </div>
      </div>

      {/* Right status items: realtime clock, wifi, battery */}
      <div className="flex items-center gap-3.5 font-normal text-[12.5px] text-[#111111]">
        <span 
          className="tabular-nums font-sans tracking-[-0.01em] text-[#111111]"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}
        >
          {currentDateTime}
        </span>
        
        {/* Wifi */}
        <span className="flex items-center" title={isOnline ? 'Connected' : 'Offline'}>
          {isOnline ? (
            <Wifi className="w-3.5 h-3.5 stroke-[2.3] text-[#111111]" />
          ) : (
            <WifiOff className="w-3.5 h-3.5 stroke-[2.3] text-red-600" />
          )}
        </span>

        {/* Battery: render only when the browser provides a real battery reading */}
        {batteryLevel !== null && (
          <div
            className="flex items-center gap-1"
            title={`${batteryLevel}% ${isCharging ? '(Charging)' : ''}`}
            aria-label={`${batteryLevel}% battery ${isCharging ? 'and charging' : ''}`}
          >
            <div className="flex items-center gap-0.5">
              <div className="w-[21px] h-[11px] border-[1.2px] border-[#111111] rounded-[2.5px] p-[1.5px] flex items-center relative">
                <div
                  className="h-full bg-[#111111] rounded-[1px] transition-all duration-300"
                  style={{ width: `${Math.max(0, Math.min(100, batteryLevel))}%` }}
                />
                {isCharging && (
                  <Zap className="w-2.5 h-2.5 text-[#FFBD2E] fill-[#FFBD2E] absolute inset-0 m-auto" />
                )}
              </div>
              <div className="w-[1.5px] h-[4px] bg-[#111111] rounded-r-[1px]" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
