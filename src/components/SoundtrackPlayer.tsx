import { useEffect, useRef, useState } from 'react'
import { Music2, Pause, Play, Volume2, VolumeX } from 'lucide-react'

const TRACK_URL = 'https://reddtools.com/music/minimal-electronic.mp3'

export function SoundtrackPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.24)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => setIsPlaying(false)
    const handleError = () => {
      setHasError(true)
      setIsPlaying(false)
    }

    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)
    return () => {
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.pause()
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    setHasError(false)
    try {
      await audio.play()
      setIsPlaying(true)
      setIsExpanded(true)
    } catch {
      setHasError(true)
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    setVolume((current) => current === 0 ? 0.24 : 0)
  }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60]">
      <audio ref={audioRef} src={TRACK_URL} preload="none" loop />
      <div className="flex flex-col items-end gap-2">
        {isExpanded && (
          <div
            className="w-[min(290px,calc(100vw-2.5rem))] rounded-2xl border border-[#D8CEBD] bg-[#FAF5EC]/95 p-4 shadow-[0_14px_50px_rgba(17,17,17,0.16)] backdrop-blur-xl"
            role="group"
            aria-label="Soundtrack controls"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0755F5] text-white">
                <Music2 className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-[#111111]">Minimal Electronic</p>
                <p className="text-[11px] text-[#77716A]">Portfolio soundtrack · Instrumental</p>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="rounded-full p-1.5 text-[#77716A] transition hover:bg-black/5 hover:text-[#111111] focus-visible:outline"
                aria-label="Close soundtrack controls"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={toggleMute}
                className="rounded-full p-1.5 text-[#333333] transition hover:bg-black/5 focus-visible:outline"
                aria-label={volume === 0 ? 'Unmute soundtrack' : 'Mute soundtrack'}
              >
                {volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <input
                aria-label="Soundtrack volume"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                className="h-1.5 flex-1 cursor-pointer accent-[#0755F5]"
              />
              <span className="w-8 text-right font-mono text-[10px] text-[#77716A]">{Math.round(volume * 100)}%</span>
            </div>
            {hasError && (
              <p className="mt-2 text-xs text-red-600" role="status">
                The track couldn't load. Please try again.
              </p>
            )}
            <p className="mt-3 text-[10px] text-[#8A8278]">
              Music by ReddTools · <a className="underline underline-offset-2 hover:text-[#0755F5]" href="https://reddtools.com/music/" target="_blank" rel="noreferrer">Track & usage details</a>
            </p>
          </div>
        )}

        <div className="flex items-center gap-2 rounded-full border border-[#D8CEBD] bg-[#FAF5EC]/95 p-1.5 pl-3 shadow-[0_8px_30px_rgba(17,17,17,0.12)] backdrop-blur-xl">
          <button
            type="button"
            onClick={() => {
              if (!isExpanded) setIsExpanded(true)
              if (!isPlaying) void togglePlayback()
              else void togglePlayback()
            }}
            className="flex items-center gap-2 rounded-full py-1.5 pr-2 text-xs font-semibold text-[#222222] transition hover:text-[#0755F5] focus-visible:outline"
            aria-label={isPlaying ? 'Pause portfolio soundtrack' : 'Play portfolio soundtrack'}
            aria-pressed={isPlaying}
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#0755F5] text-white">
              {isPlaying ? <Pause className="h-3.5 w-3.5 fill-current" /> : <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />}
              {isPlaying && <span className="absolute -inset-1 animate-ping rounded-full border border-[#0755F5]/40" />}
            </span>
            <span>{isPlaying ? 'Sound on' : 'Soundtrack'}</span>
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded((open) => !open)}
            className="rounded-full p-2 text-[#77716A] transition hover:bg-black/5 hover:text-[#0755F5] focus-visible:outline"
            aria-label={isExpanded ? 'Hide soundtrack settings' : 'Show soundtrack settings'}
            aria-expanded={isExpanded}
          >
            <Volume2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
