import Section from './Section'

export default function Projects({ items = [] }) {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work that I’m proud of">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <div key={p.name} className="group rounded-2xl border border-white/40 bg-white/60 backdrop-blur overflow-hidden">
            {p.image && (
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            )}
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-700 mt-1 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech?.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-gray-900 text-white text-xs">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.live && <a className="text-blue-600 hover:underline" href={p.live} target="_blank" rel="noreferrer">Live</a>}
                {p.repo && <a className="text-blue-600 hover:underline" href={p.repo} target="_blank" rel="noreferrer">Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )}
