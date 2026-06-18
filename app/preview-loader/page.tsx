'use client'

import { PawLoader } from '@/components/ui/paw-loader'

export default function PreviewLoaderPage() {
  return (
    <main className="min-h-screen bg-[#F8F4F4] flex flex-col items-center justify-center gap-16 px-6 py-16">
      <h1 className="font-sans text-2xl font-semibold text-[#3B468E]">Paw Loader Preview</h1>

      {/* Sizes on light background */}
      <section className="flex flex-col items-center gap-8 w-full">
        <h2 className="text-sm font-medium text-[#3B468E]/60 uppercase tracking-widest">Sizes — light background</h2>
        <div className="flex flex-wrap items-end justify-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <PawLoader size="sm" color="#3B468E" />
            <span className="text-xs text-[#3B468E]/50">sm</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <PawLoader size="md" color="#3B468E" />
            <span className="text-xs text-[#3B468E]/50">md</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <PawLoader size="lg" color="#3B468E" />
            <span className="text-xs text-[#3B468E]/50">lg</span>
          </div>
        </div>
      </section>

      {/* Sizes on navy background */}
      <section className="flex flex-col items-center gap-8 w-full">
        <h2 className="text-sm font-medium text-[#3B468E]/60 uppercase tracking-widest">Sizes — dark background</h2>
        <div className="flex flex-wrap items-end justify-center gap-12 bg-[#3B468E] rounded-2xl px-12 py-10">
          <div className="flex flex-col items-center gap-3">
            <PawLoader size="sm" color="#26C9AA" />
            <span className="text-xs text-white/50">sm</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <PawLoader size="md" color="#26C9AA" />
            <span className="text-xs text-white/50">md</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <PawLoader size="lg" color="#26C9AA" />
            <span className="text-xs text-white/50">lg</span>
          </div>
        </div>
      </section>

      {/* Full-screen simulation */}
      <section className="flex flex-col items-center gap-6 w-full">
        <h2 className="text-sm font-medium text-[#3B468E]/60 uppercase tracking-widest">Page-transition center mark</h2>
        <p className="text-sm text-[#3B468E]/50 text-center max-w-sm">
          This is what shows in the center of the iris while the screen is fully covered between pages.
        </p>
        <div className="relative w-full max-w-md h-48 rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: '#26C9AA' }}>
          <PawLoader size="lg" color="#F8F4F4" />
        </div>
        <div className="relative w-full max-w-md h-48 rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: '#3B468E' }}>
          <PawLoader size="lg" color="#26C9AA" />
        </div>
      </section>
    </main>
  )
}
