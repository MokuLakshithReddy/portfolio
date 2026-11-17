import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'

export function NotFoundPage() {
  return (
    <main className="min-h-screen w-full bg-[#F5EFEB] text-[#111111] paper-texture flex items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0755F5]/30 bg-[#0755F5]/10 px-3 py-1.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-[#0755F5]">
          <Compass className="h-3.5 w-3.5" />
          404 · Page not found
        </div>
        <h1 className="mt-6 font-anton text-6xl uppercase leading-none sm:text-8xl">Wrong turn.</h1>
        <p className="mx-auto mt-5 max-w-md font-mono-tech text-sm leading-relaxed text-[#555555]">
          This page does not exist or may have moved. Head back to the portfolio and choose another destination.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0755F5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0043D6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0755F5]">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
