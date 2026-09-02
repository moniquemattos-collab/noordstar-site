export function ReportSlideVisual({ index }: { index: 0 | 1 | 2 }) {
  if (index === 0) {
    return (
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <div className="h-2 w-16 rounded-full bg-navy/15" />
          <div className="h-2 w-8 rounded-full bg-gold/40" />
        </div>
        <div className="flex items-center gap-6">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-gold/70">
            <span className="font-serif text-2xl text-navy">82</span>
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-2 w-full rounded-full bg-navy/10" />
            <div className="h-2 w-4/5 rounded-full bg-navy/10" />
            <div className="h-2 w-3/5 rounded-full bg-gold/30" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-sm border border-navy/10 p-2">
              <div className="h-1.5 w-6 rounded-full bg-navy/15" />
              <div className="mt-2 h-4 w-8 rounded-sm bg-navy/10" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 h-2 w-24 rounded-full bg-navy/15" />
        <div className="relative flex-1 rounded-sm border border-navy/10">
          <div className="absolute left-1/2 top-0 h-full w-px bg-navy/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-navy/10" />
          <span className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="absolute left-[65%] top-[20%] h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="absolute left-[30%] top-[65%] h-2.5 w-2.5 rounded-full bg-navy/40" />
          <span className="absolute left-[78%] top-[78%] h-2.5 w-2.5 rounded-full bg-navy/20" />
          <span className="absolute left-[50%] top-[40%] h-2.5 w-2.5 rounded-full bg-navy/40" />
        </div>
        <div className="mt-4 flex justify-between text-[10px] uppercase tracking-widest2 text-navy/40">
          <span>Effort</span>
          <span>Impact</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-center p-6">
      <div className="mb-6 h-2 w-28 rounded-full bg-navy/15" />
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-navy/15" />
        <div className="relative flex justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span
                className={`h-3 w-3 rounded-full ${
                  i === 0 ? "bg-gold" : "bg-navy/30"
                }`}
              />
              <div className="h-1.5 w-8 rounded-full bg-navy/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
