export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] px-6 py-12 md:px-12">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Projects
        </p>
        <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
          Selected work and builds.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-neutral-700 md:text-lg">
          This page is ready for your portfolio projects. Add case studies,
          links, screenshots, or a project grid here.
        </p>
      </section>
    </main>
  );
}
