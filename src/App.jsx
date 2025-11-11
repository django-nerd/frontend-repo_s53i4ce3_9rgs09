import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [profile, setProfile] = useState(null)
  const [skills, setSkills] = useState([])
  const [experience, setExperience] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const fetchAll = async () => {
      try {
        const [p, s, e, pr] = await Promise.all([
          fetch(`${baseUrl}/api/profile`).then((r) => r.json()),
          fetch(`${baseUrl}/api/skills`).then((r) => r.json()),
          fetch(`${baseUrl}/api/experience`).then((r) => r.json()),
          fetch(`${baseUrl}/api/projects`).then((r) => r.json()),
        ])
        setProfile(p)
        setSkills(s)
        setExperience(e)
        setProjects(pr)
      } catch (err) {
        console.error('Failed to load data', err)
      }
    }
    fetchAll()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F6FF] to-[#F8F4FF] text-gray-900">
      <Navbar />
      <Hero profile={profile} />
      <main>
        <About profile={profile} />
        <Skills items={skills} />
        <Experience items={experience} />
        <Projects items={projects} />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  )
}

export default App
