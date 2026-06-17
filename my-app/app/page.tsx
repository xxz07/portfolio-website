import ResumeButton from "./components/resume-button";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-12 bg-linear-to-br from-neutral-50 via-white to-neutral-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl bg-white/80 backdrop-blur-md border border-neutral-200/50 shadow-lg p-8 md:p-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Hi, I&apos;m Xinzhe Xu.
          </h1>
          <p className="text-base leading-7 md:text-lg">
            This home page is now the main place for your content. Use the
            navigation to jump to each section on the page.
          </p>
        </div>

        <section id="projects" className="scroll-mt-28 rounded-2xl bg-white/50 backdrop-blur-sm border border-neutral-200/30 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900">
            Featured projects
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Place your project summaries, screenshots, and links here.
          </p>
        </section>

        <section id="about" className="scroll-mt-28 rounded-2xl bg-stone-50/60 backdrop-blur-sm border border-neutral-200/30 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            About
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900">
            About me
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Add your bio and background here.
          </p>
        </section>

        <section id="education" className="scroll-mt-28 rounded-2xl bg-neutral-50/60 backdrop-blur-sm border border-neutral-200/30 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Education
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900">
            Education
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Add your school history or certifications here.
          </p>
        </section>

        <section id="contact" className="scroll-mt-28 rounded-2xl bg-neutral-900/90 backdrop-blur-sm border border-neutral-700/50 p-6 text-white md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-300">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold">Get in touch</h2>
          <p className="mt-3 max-w-2xl text-neutral-200">
            Add your email, socials, or a contact form here.
          </p>
        </section>
      </section>

        <div className="flex justify-center pt-12">
          <ResumeButton />
        </div>
    </main>
  );
}
