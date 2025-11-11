import Spline from '@splinetool/react-spline'

export default function Hero({ profile }) {
  return (
    <div className="relative min-h-[90vh] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[90vh] flex items-center">
            <div className="pointer-events-auto bg-white/50 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-xl max-w-xl">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Software Engineer Portfolio</p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
                {profile?.name || 'Your Name'}
              </h1>
              <p className="mt-2 text-lg text-gray-700">{profile?.title || 'Software Engineer'}</p>
              <p className="mt-4 text-gray-600">{profile?.bio}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {profile?.socials && Object.entries(profile.socials).map(([k, v]) => (
                  <a key={k} href={v} target="_blank" rel="noreferrer" className="pointer-events-auto inline-flex items-center px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">
                    {k}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
