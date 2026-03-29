import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Code2, BrainCircuit, Database, Globe, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skills = [
  'Python',
  'Machine Learning',
  'Data Analytics',
  'FastAPI',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'SQL',
  'MLflow',
  'Docker',
  'Cloudflare Workers',
  'Azure AI',
  'React',
  'TypeScript',
  'Git',
  'API Integration',
];

const projects = [
  {
    title: 'End-to-End ML Churn Prediction System',
    icon: BrainCircuit,
    description:
      'Production-style machine learning workflow with model training, experiment tracking, API inference, monitoring, and drift-oriented reporting.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'MLflow', 'Prometheus'],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Demo', href: '#' },
    ],
  },
  {
    title: 'OCR Web App with Cloudflare + Azure',
    icon: Globe,
    description:
      'Browser-based OCR application for extracting text from images using a lightweight frontend, a Cloudflare Worker proxy, and Azure AI services.',
    stack: ['JavaScript', 'Cloudflare Workers', 'Azure AI', 'GitHub Pages'],
    links: [
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    title: 'AI Agent Crypto Analytics Concept',
    icon: Database,
    description:
      'Multi-agent decision-support architecture combining macro, technical, risk, sentiment, and fundamental analysis into a structured investment memo pipeline.',
    stack: ['LLM Systems', 'Agent Design', 'Financial Analytics', 'Architecture'],
    links: [
      { label: 'Project Notes', href: '#' },
    ],
  },
];

const education = [
  {
    degree: 'MSc in Business Informatics',
    place: 'University of Fribourg',
    details:
      'Focus on analytics, information systems, applied AI, and technical project work bridging business and computing.',
  },
  {
    degree: 'Background in Data Analytics & Economics',
    place: 'University-level coursework',
    details:
      'Coursework and projects involving machine learning, data methods, optimization, and decision-oriented analysis.',
  },
];

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function DarkPortfolioReactApp() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 selection:bg-cyan-400/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-[0.22em] text-slate-200 uppercase"
          >
            A.A
          </motion.a>

          <nav className="hidden gap-6 md:flex">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * idx }}
                className="text-sm text-slate-400 transition hover:text-cyan-300"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="relative mx-auto flex max-w-6xl flex-col px-6 lg:px-8">
        <section className="flex min-h-[92vh] flex-col justify-center py-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariant}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium text-cyan-300">
                MSc Student · Data Analytics · Machine Learning · Business Informatics
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
              >
                Andrei Anikin
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
              >
                I build analytics-driven applications, machine learning workflows, and technical portfolio projects that connect data, systems, and practical decision-making.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl bg-cyan-500 px-6 text-slate-950 hover:bg-cyan-400">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 text-slate-200 hover:bg-white/10 hover:text-white">
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4 text-slate-400">
                <a href="#" className="transition hover:text-cyan-300"><Github className="h-5 w-5" /></a>
                <a href="#" className="transition hover:text-cyan-300"><Linkedin className="h-5 w-5" /></a>
                <a href="mailto:your@email.com" className="transition hover:text-cyan-300"><Mail className="h-5 w-5" /></a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-blue-500/5 blur-2xl" />
              <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Profile Snapshot</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">Tech-Focused CV</h2>
                    </div>
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                      <span className="h-3 w-3 rounded-full bg-green-400/80" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      ['Primary Focus', 'Machine Learning, Analytics, AI Systems'],
                      ['Current Direction', 'Business Informatics + Portfolio Engineering'],
                      ['Strengths', 'Applied Python, APIs, Data Workflows, Technical Writing'],
                      ['Languages', 'English, Russian, French'],
                    ].map(([label, value], idx) => (
                      <motion.div
                        key={label}
                        custom={idx}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
                        <p className="mt-2 text-sm text-slate-200">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex justify-center"
          >
            <a href="#about" className="inline-flex animate-bounce items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-300">
              Scroll
              <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Building useful systems, not just demos.</h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="grid gap-6 p-8 md:grid-cols-2">
                <div>
                  <p className="text-slate-300 leading-8">
                    I am a university student working at the intersection of data analytics, machine learning, and business-oriented information systems. My projects typically focus on turning technical ideas into structured, usable applications.
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 leading-8">
                    I am especially interested in end-to-end ML systems, AI-enabled tools, applied analytics, and portfolio projects that demonstrate both implementation skill and architectural thinking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section
          id="skills"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-cyan-300" />
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Skills</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Technical toolkit</h2>
            </div>
          </motion.div>

          <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    custom={idx}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Badge className="rounded-full border border-white/10 bg-[#161b22] px-4 py-2 text-sm font-medium text-slate-200 hover:bg-[#1f2937]">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="projects"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={sectionVariant}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  custom={idx}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                >
                  <Card className="group h-full rounded-3xl border-white/10 bg-white/5 transition-colors backdrop-blur-xl hover:border-cyan-400/30">
                    <CardContent className="flex h-full flex-col p-7">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <Badge key={item} variant="secondary" className="rounded-full bg-slate-800/80 text-slate-300">
                            {item}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
                          >
                            {link.label}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-cyan-300" />
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Education</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Academic background</h2>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, idx) => (
              <motion.div key={item.degree} custom={idx} variants={fadeUp}>
                <Card className="h-full rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardContent className="p-7">
                    <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                    <p className="mt-2 text-cyan-300">{item.place}</p>
                    <p className="mt-4 leading-7 text-slate-400">{item.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-16 pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <motion.div variants={fadeUp}>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-blue-500/10 backdrop-blur-xl">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Contact</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let's build something sharp.</h2>
                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                    For internships, technical collaborations, or portfolio discussions, you can replace the placeholder links with your real GitHub, LinkedIn, email, and project URLs.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button asChild className="rounded-2xl bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                    <a href="mailto:your@email.com">Email Me</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white">
                    <a href="#">Open GitHub</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}