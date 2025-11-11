import Section from './Section'

export default function About({ profile }) {
  return (
    <Section id="about" title="About" subtitle="Who I am and what I love to build">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
          <p>{profile?.bio || 'I build modern web apps with delightful UX and robust backends.'}</p>
          <p>
            My focus is on performance, accessibility, and developer experience. I enjoy turning complex
            requirements into elegant, scalable solutions.
          </p>
        </div>
        <div className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur p-5">
          <h3 className="font-semibold mb-3">Quick facts</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Based in {profile?.location || 'Anywhere'}</li>
            <li>• Open to remote and hybrid roles</li>
            <li>• Love working with React, TypeScript, FastAPI</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
