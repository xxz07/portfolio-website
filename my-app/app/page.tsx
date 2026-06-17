import ResumeButton from "./components/resume-button";
import ProjectCard from "./components/project-card";

const contactEmail = "your-email@example.com";

function createMailtoLink(email: string) {
  const subject = encodeURIComponent("Portfolio message");
  const body = encodeURIComponent("Hi Xinzhe,\n\n");

  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-12 bg-linear-to-br from-neutral-50 via-white to-neutral-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl bg-white/80 backdrop-blur-md border border-neutral-200/50 shadow-lg p-8 md:p-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Portfolio
          </p>
          <p className="text-base leading-7 md:text-lg text-neutral-800">
            Hi, my name is
          </p>
          <h1 className="text-4xl font-bold md:text-6xl text-neutral-900">
            Xinzhe Xu
          </h1>
          <p className="text-base leading-7 md:text-lg text-neutral-500">
            I'm a student at ROC Mondriaan, studying in the field of{" "}
            <span className="font-bold">Software Development</span> and this is
            my <span className="font-bold">Portfolio</span>.
          </p>
        </div>

        <section
          id="about"
          className="scroll-mt-28 rounded-2xl bg-stone-50/60 backdrop-blur-sm border border-neutral-200/30 p-6 md:p-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            About me
          </p>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Hello! my name is <span className="font-bold">Xinzhe Xu</span> but
            most people call me <span className="font-bold">Dennis</span>, I'm 18 years old and I
            enjoy spending my time in the gym. I'm eager to expand my knowledge
            in programming languages. As I continue my studies, I'm actively
            working on projects to sharpen my coding skills and gain hands-on
            experience. I'm always open with learning new techniques and
            collaborating on exciting projects.
          </p>
        </section>

        <section
          id="education"
          className="scroll-mt-28 rounded-2xl bg-neutral-50/60 backdrop-blur-sm border border-neutral-200/30 p-6 md:p-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Education
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900">
            Education
          </h2>

          <div className="mt-6 space-y-4">
            <div className="border-l-2 border-neutral-300 pl-4">
              <h3 className="text-lg font-semibold text-neutral-900">
                Montaigne Lyceum
              </h3>
              <p className="text-sm text-neutral-500">VMBO Diploma</p>
              <p className="text-sm text-neutral-600">2021 - 2024</p>
            </div>

            <div className="border-l-2 border-neutral-300 pl-4">
              <h3 className="text-lg font-semibold text-neutral-900">
                ROC Mondriaan
              </h3>
              <p className="text-sm text-neutral-500">Software Development</p>
              <p className="text-sm text-neutral-600">2024 - Present</p>
            </div>
          </div>

          <div className="flex flex-col mt-10 justify-center pt-4 border-t border-neutral-200/50">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Languages & Frameworks
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Languages */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded bg-neutral-800 text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 rounded bg-neutral-800 text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 rounded bg-neutral-800 text-sm">
                    PHP
                  </span>
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded bg-neutral-600 text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 rounded bg-neutral-600 text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 rounded bg-neutral-600 text-sm">
                    Symphony
                  </span>
                  <span className="px-3 py-1 rounded bg-neutral-600 text-sm">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 rounded bg-neutral-600 text-sm">
                    Bootstrap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-28 rounded-2xl bg-white/50 backdrop-blur-sm border border-neutral-200/30 p-6 md:p-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900">
            Featured projects
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="TreeMedia"
              description="This project is a attmepted try at creating a media application. This project was made with other classmates and I."
              tags={["React", "Next.js", "Tailwind"]}
              linkLabel="View project"
              href="https://github.com/xxz07/treemedia"
            />

            <ProjectCard
              title="SDG Dashboard"
              description="This is an old school project where you need to show graphs of sustainable development goals. This project was made with other classmates and I."
              tags={["Next.js", "Tailwind", "Chart.js"]}
              linkLabel="View project"
              href="https://github.com/xxz07/SDG-Dashboard"
            />

            <ProjectCard
              title="Budget Buddy"
              description="This project was made to use crud operations by posting, deleting, updating and reading posts. This project was made with other classmates and I."
              tags={["Symphony", "Bootstrap", "Database"]}
              linkLabel="View project"
              href="https://github.com/xxz07/Budget-Buddy.git"
            />

            <ProjectCard
              title="Library lending system"
              description="Work in progress."
              tags={["Next.js", "Tailwind", "React"]}
              linkLabel="View project"
              href="https://github.com/ROCMondriaanTIN/sd24-project-p08-werkplek-leren-scientology-speedrunners-larping.git"
            />


          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-28 rounded-2xl bg-neutral-900/90 backdrop-blur-sm border border-neutral-700/50 p-6 text-white md:p-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-300">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold">Get in touch</h2>
          <p className="mt-3 max-w-2xl text-neutral-200">
            You can reach me on LinkedIn, GitHub, or send me an email directly.
          </p>

          <p className="flex flex-col text-sm mt-6 text-neutral-200">
            <span>Business mail: xxz07.work@gmail.com</span>
            <span>Student mail: 302056276@student.rocmondriaan.nl</span>
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://www.linkedin.com/in/xinzhe-xu-9212b2364?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-200 underline decoration-neutral-500 underline-offset-4 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/xxz07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-200 underline decoration-neutral-500 underline-offset-4 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </section>
      </section>

      <div className="flex justify-center pt-12">
        <ResumeButton />
      </div>
    </main>
  );
}
