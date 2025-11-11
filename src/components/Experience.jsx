import Section from './Section'

export default function Experience({ items = [] }) {
  return (
    <Section id="experience" title="Experience" subtitle="Places I've built and led products">
      <div className="space-y-6">
        {items.map((e) => (
          <div key={e.company + e.role} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">{e.role} · {e.company}</h3>
                <p className="text-gray-600">{e.location}</p>
              </div>
              <div className="text-sm text-gray-700 font-medium">{e.start} — {e.end}</div>
            </div>
            {e.achievements && e.achievements.length > 0 && (
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                {e.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
