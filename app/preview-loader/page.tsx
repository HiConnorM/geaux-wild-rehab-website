'use client'

import { PawLoader } from '@/components/ui/paw-loader'

export default function PreviewLoaderPage() {
  return (
    <main className="min-h-screen bg-[#F8F4F4] flex flex-col items-center gap-16 py-16 px-6">
      <h1 className="text-sm font-mono tracking-widest uppercase text-[#3B468E]/50">
        Paw Loader Preview
      </h1>

      {/* Static frozen — for layout verification */}
      <section className="flex flex-col items-center gap-4">
        <p className="text-xs font-mono uppercase tracking-widest text-[#3B468E]/40">
          Static — all 4 paws visible (layout check)
        </p>
        <div className="flex gap-16 items-start">
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="sm" color="#3B468E" static />
            <span className="text-xs text-[#3B468E]/40">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="md" color="#3B468E" static />
            <span className="text-xs text-[#3B468E]/40">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="lg" color="#3B468E" static />
            <span className="text-xs text-[#3B468E]/40">lg</span>
          </div>
        </div>
      </section>

      {/* Static on navy */}
      <section className="flex flex-col items-center gap-4">
        <p className="text-xs font-mono uppercase tracking-widest text-[#3B468E]/40">
          Static — teal on navy
        </p>
        <div className="rounded-2xl p-10 flex gap-16 items-start" style={{ background: '#3B468E' }}>
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="sm" color="#26C9AA" static />
            <span className="text-xs text-white/30">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="md" color="#26C9AA" static />
            <span className="text-xs text-white/30">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="lg" color="#26C9AA" static />
            <span className="text-xs text-white/30">lg</span>
          </div>
        </div>
      </section>

      {/* Animated */}
      <section className="flex flex-col items-center gap-4">
        <p className="text-xs font-mono uppercase tracking-widest text-[#3B468E]/40">
          Animated — one paw at a time, then repeat
        </p>
        <div className="flex gap-16 items-start">
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="sm" color="#3B468E" />
            <span className="text-xs text-[#3B468E]/40">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="md" color="#3B468E" />
            <span className="text-xs text-[#3B468E]/40">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PawLoader size="lg" color="#3B468E" />
            <span className="text-xs text-[#3B468E]/40">lg</span>
          </div>
        </div>
      </section>

      {/* Page-transition colors animated */}
      <section className="flex flex-col items-center gap-4">
        <p className="text-xs font-mono uppercase tracking-widest text-[#3B468E]/40">
          Page-transition colors — animated
        </p>
        <div className="flex gap-8 items-start">
          <div className="rounded-2xl p-8 flex flex-col items-center gap-2" style={{ background: '#26C9AA' }}>
            <PawLoader size="lg" color="#F8F4F4" />
            <span className="text-xs text-white/50">cream on teal</span>
          </div>
          <div className="rounded-2xl p-8 flex flex-col items-center gap-2" style={{ background: '#3B468E' }}>
            <PawLoader size="lg" color="#26C9AA" />
            <span className="text-xs text-white/30">teal on navy</span>
          </div>
        </div>
      </section>
    </main>
  )
}
