import React, {useState} from 'react';
import {Github, Linkedin, Mail, Code2, X} from 'lucide-react';
import { Analytics } from "@vercel/analytics/next"

const PROJECTS = [
  {
    id: 1,
    title: "Codebase Teacher - Retrieval-Augmented Generation",
    category: "AI",
    description: "An AI assistant powered by Retrieval-Augmented Generation (RAG). Upload a codebase (.zip), and the model parses the directory structure to answer technical queries with context-aware accuracy.",
    tags: ["RAG", "LLMs", "Groq API", "Streamlit"],
    image: "https://i.imgur.com/VraI2td.png",
    demoUrl: "https://codebaseteach.streamlit.app/?embed=true",
    repoUrl: "https://github.com/joshGilstrap/codebase_online",
  },
  {
    id: 2,
    title: "Research Crew - Multimodal Researching AI",
    category: "AI",
    description: "A multi-agent system designed for automated deep research. The AI 'crew' browses the web, synthesizes data, and generates comprehensive reports with a human-in-the-loop approval workflow.",
    tags: ["AI Agents", "Automation", "Research", "Python"],
    image: "https://i.imgur.com/2568zPQ.png",
    demoUrl: "https://researchcrew.streamlit.app/?embed=true",
    repoUrl: "https://github.com/joshGilstrap/research_crew",
  },
  {
    id: 3,
    title: "Verifiable RAG Engine",
    category: "AI",
    description: "Enterprise-grade retrieval system utilizing Pinecone and Groq. Features hallucination-resistant prompting and strict source citation for high-fidelity document analysis.",
    tags: ["AI Agents", "Automation", "Research", "Python"],
    image: "https://i.imgur.com/ZDvr3Po.png",
    demoUrl: "https://pdf-fact-checker.streamlit.app/?embed=true",
    repoUrl: "https://github.com/joshGilstrap/pdf_teacher",
  },
  {
    id: 4,
    title: "Horde Survivor",
    category: "p5.js",
    description: "A fast-paced 'Vampire Survivors' style roguelite. Features dynamic difficulty scaling, an experience/leveling system, and optimized rendering for on-screen entities.",
    tags: ["JavaScript", "Game Dev", "OOP", "Collision"],
    image: "https://i.imgur.com/sjWs5jq.png",
    type: "iframe",
    demoUrl: "https://editor.p5js.org/Josharooski/full/rhUk8ouR-",
  },
  {
    id: 5,
    title: "Bounce-A-Lot",
    category: "p5.js",
    description: "A physics-based arcade survival game built entirely using Object-Oriented JavaScript. Demonstrates custom gravity logic, collision handling, and state management.",
    tags: ["Physics", "p5.js", "Classes", "Arcade"],
    image: "https://i.imgur.com/GItQ4x7.png",
    type: "iframe",
    demoUrl: "https://editor.p5js.org/Josharooski/full/S0cceXCQE"
  },
  {
    id: 6,
    title: "Vector Physics Prototype",
    category: "p5.js",
    description: "Experimental physics sandbox exploring emergent gameplay.",
    tags: ["Physics", "p5.js", "Classes", "Arcade"],
    image: "https://i.imgur.com/sKCmxst.png",
    type: "iframe",
    demoUrl: "https://editor.p5js.org/Josharooski/full/Ly9J3ntvr"
  },
  {
    id: 7,
    title: "Pygame Raycaster",
    category: "Pygame",
    description: "DOOM-style pseudo-3D rendering engine built from scratch. Implements trigonometric ray-marching algorithms.",
    tags: ["Python", "Pygame"],
    image: "https://i.imgur.com/J64UUVG.png",
    type: "iframe",
    demoUrl: "https://joshgilstrap.github.io/pygame_raycaster_web/",
    repoUrl: "https://github.com/joshGilstrap/Pygame_Raycaster",
  },
  {
    id: 8,
    title: "2D Entity Framework",
    category: "Pygame",
    description: "Modular game loop architecture featuring custom AABB (Axis-Aligned Bounding Box) collision detection and object-oriented entity state management.",
    tags: ["Python", "Pygame"],
    image: "https://i.imgur.com/P1XeYTz.png",
    type: "iframe",
    demoUrl: "https://joshgilstrap.github.io/platformer_2D_web/",
    repoUrl: "https://github.com/joshGilstrap/2D-platformer",
  },
]

const ProjectCard = ({project}) => {
  return (
    <div className='bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-50 transistion-all'>
      {/*Image*/}
      <div className='h-48 overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
        />
      </div>

      {/*Text Content*/}
      <div className='p-6'>
        <span className='text-xs font-bold text-blue-400 uppercase tracking-wider'>
          {project.category}
        </span>
        <h3 className='text-xl font-bold text-white mt-2 mb-2'>
          {project.title}
        </h3>
        <p className='text-slate-400 text-sm'>
          {project.description}
        </p>
      </div>
    </div>
  )
}

const ProjectModal = ({project, onClose}) => {
  if(!project) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'>
      <div className='relative w-full max-w-5xl h-[80vh] bg-slate-900 rounded-xl border border-slate-700 flex flex-col overflow-hidden shadow-2xl'>

        <div className='flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900'>
          <div className='flex items-center gap-4'>
            <h3 className='text-xl font-bold text-white'>{project.title}</h3>
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-slate-300 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
              >
                <Github size={14} /> View Code
              </a>
            )}
          </div>
          <button onClick={onClose} className='p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors'>
            <X size={24} />
          </button>
        </div>

        <div className='flex-1 bg-black relative'>
          {project.demoUrl ? (
            <iframe
              src={project.demoUrl}
              title={project.title}
              className='w-full h-full border-0' 
            />
          ) : (
            <div className='flex items-center justify-center h-full text-slate-500'>
              <p>Demo not connected yet.</p>
            </div>
          )}
        </div>

        <div className='p-4 bg-slate-900 border-t border-slate-800 text-sm text-slate-400'>
          Viewing interactive demo for {project.category}
        </div>

      </div>
    </div>
  )
}

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
        
        <div className='font-bold text-xl text-white flex items-center gap-2'>
          <Code2 className='text-blue-500' />
          <span>Josh Gilstrap</span>
        </div>

        <div className='flex gap-6 text-sm font-medium text-slate-400'>
          <a href='#home' className='hover:text-blue-400 transition-colors'>Home</a>
          <a href='#projects' className='hover:text-blue-400 transition-colors'>Projects</a>
          <a href='#contact' className='hover:text-blue-400 transition-colors'>Contact</a>
        </div>
      </div>
    </nav>
  )
};

const Hero = () => {
  return (
    <section id='home' className='pt-20 pb-32 px-6 text-center'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
          Building intelligent <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400'>
            digital experiences.
          </span>
        </h1>

        <p className='text-lg text-slate-400 mb-10 max-w-2xl mx-auto'>
          I am a full-stack developer with a passion for Python, AI, and Creative Coding.
        </p>

        <div className='flex justify-center gap-4'>
          <a href="https://github.com/joshgilstrap" className='px-8 py-3 rounded-lg bg-slate-800 text-white flex items-center gap-2 hover:bg-slate-700 transition-all'>
            <Github size={20} /> 
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-slate-950 border-t border-slate-900'>
      <div className='max-w-4xl mx-auto text-center px-6'>
        <h2 className='text-3xl font-bold text-white mb-6'>
          Ready to Collaborate?
        </h2>

        <p className='text-slate-400 mb-8 max-w-xl mx-auto'>
          I am currently looking for full-time roles in AI Engineering or Full Stack Development. 
          If you have an interesting project or just want to say hi, feel free to reach out!
        </p>

        <a href='mailto:jgilstrap23@gmail.com' className='inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/25'>
          <Mail size={20} />
          Send An Email
        </a>

        <div className='mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm'>
          <p>© {new Date().getFullYear()} Josh Gilstrap. Built with React & Tailwind.</p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <a href="https://github.com/joshgilstrap" className='hover:text-blue-500 transition-colors'><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/josh-gilstrap-3b34b0126/" className='hover:text-blue-500 transition-colors'><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 opacity-50 blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 opacity-50 blur-[100px]"></div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 opacity-30 blur-[100px]"></div>
    </div>
  );
};

const App = () => {
  const [filter, setFilter] = useState("All");

  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = filter === "All" ? PROJECTS : PROJECTS.filter(project => project.category === filter)

  return (
    <div className='min-h-screen font-sans'>
      <Background />
      <NavBar />
      <Hero />

      <section id='projects' className='py-5 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-10 gap-6'>
            <h2 className='text-3xl font-bold text-white mb-10'>Featured Work - All Interactable!</h2>

            <div className="flex gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
              {['All', 'p5.js', 'Pygame', 'AI'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === category 
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            {visibleProjects.map((item) => (
              <div key={item.id} onClick={() => setSelectedProject(item)} className='cursor-pointer'>
                <ProjectCard project={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <Contact />
    </div>
  );
};

export default App;
