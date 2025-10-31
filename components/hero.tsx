export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Large cosmic orb */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-60 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(185, 29, 143, 0.8), rgba(0, 212, 255, 0.3) 50%, transparent)",
          }}
        ></div>

        {/* Accent glows */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.6), transparent)" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, rgba(255, 107, 157, 0.5), transparent)" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12 flex justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-600 p-1 cosmic-glow float-planet">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center relative">
                <span className="text-6xl">👨‍💻</span>
                {/* Orbiting rings */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin"
                  style={{ animationDuration: "8s" }}
                ></div>
                <div
                  className="absolute inset-4 rounded-full border border-pink-600/20 animate-spin"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
          Explore <span className="gradient-text">My Journey</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-light">
          As a B.Tech student at VIT, I'm navigating the vast cosmos of AI and Web Development
        </p>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join me as I explore cutting-edge technologies, build innovative solutions, and push the boundaries of what's
          possible. Expected to graduate in 2028.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#skills"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Explore My Skills
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-pink-600 text-pink-400 font-semibold rounded-lg hover:bg-pink-600/10 transition-all"
          >
            Start a Conversation
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { number: "4+", label: "Years of Coding" },
            { number: "50+", label: "Projects Completed" },
            { number: "3", label: "Core Languages" },
            { number: "2028", label: "Graduation Year" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.number}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
