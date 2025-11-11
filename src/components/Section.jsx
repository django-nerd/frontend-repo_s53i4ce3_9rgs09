export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 mt-2 max-w-2xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
