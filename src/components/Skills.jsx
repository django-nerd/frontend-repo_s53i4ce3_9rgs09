import Section from './Section'

export default function Skills({ items = [] }) {
  const categories = items.reduce((acc, s) => {
    const key = s.category || 'Other'
    acc[key] = acc[key] || []
    acc[key].push(s)
    return acc
  }, {})

  return (
    <Section id="skills" title="Skills" subtitle="A quick snapshot of my toolkit">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(categories).map(([cat, list]) => (
          <div key={cat} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur p-5">
            <h3 className="font-semibold mb-3">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => (
                <span key={s.name} className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
