export default function Footer() {
  return (
    <footer className="pt-1 pb-1 w-full bg-gray-300 dark:border-black sticky bottom-0">
        
  <div className="footer-content flex flex-col my-6 items-center justify-center gap-4 text-center">

    <nav className="footer-links">
      <a href="/projects"> Projects</a>
      <a href="/skills"> Skills</a>
      <a href="/about"> About</a>
      <a href="/education"> Education</a>
    </nav>

    <div className="footer-socials">
      <a href="https://www.linkedin.com/in/xinzhe-xu-9212b2364?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      <a href="https://github.com/xxz07" target="_blank" rel="noopener noreferrer"> GitHub</a>
    </div>
    <p>© 2026 Portfolio - Xinzhe Xu.</p>
  </div>
</footer>
  );
}