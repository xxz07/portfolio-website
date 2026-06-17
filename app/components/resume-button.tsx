interface ResumeButtonProps {
  size?: "sm" | "lg";
}

export default function ResumeButton({ size = "lg" }: ResumeButtonProps) {
  const isSmall = size === "sm";
  
  return (
    <a
      href="/Xinzhe-Xu-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center"
    >
      <button
        type="button"
        className={`relative text-white bg-linear-to-b from-gray-600 to-gray-700 rounded-lg shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 ${
          isSmall ? "px-4 py-2 text-sm font-semibold" : "px-8 py-4 text-lg font-bold"
        }`}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <span className={`relative z-10 flex items-center gap-${isSmall ? "1" : "2"}`}>
          <svg
            className={`transition-transform duration-300 group-hover:-translate-y-1 ${
              isSmall ? "w-4 h-4" : "w-5 h-5"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0V5m0 8h.01"
            />
          </svg>
          {!isSmall && "Resume"}
        </span>

        {/* 3D Shadow effect */}
        <div className="absolute inset-0 rounded-lg bg-linear-to-b from-transparent to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </a>
  );
}
