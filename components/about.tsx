export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent)" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white text-center">
          About <span className="gradient-text">The Explorer</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Who I Am */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Who I Am</h3>
            <div className="cosmic-card p-8 rounded-xl">
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm Sai Kumar Reddy from Andhra Pradesh, currently on an exciting journey through the world of Computer
                Science at Vellore Institute of Technology.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm passionate about Artificial Intelligence, web development, and creating software solutions that
                matter. My mission is to blend creativity with technology and build applications that inspire.
              </p>
            </div>
          </div>

          {/* Right: Key Info */}
          <div>
            <div className="space-y-6">
              {/* Education Card */}
              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Education</h3>
                <div className="cosmic-card p-6 rounded-xl border-l-4 border-pink-600">
                  <h4 className="text-lg font-semibold text-white mb-2">B.Tech in Computer Science</h4>
                  <p className="text-cyan-400 font-semibold mb-1">Vellore Institute of Technology</p>
                  <p className="text-gray-500">Expected Graduation: 2028</p>
                </div>
              </div>

              {/* Location Card */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Based In</h3>
                <div className="cosmic-card p-6 rounded-xl border-l-4 border-cyan-500">
                  <p className="text-white font-semibold">Andhra Pradesh, India</p>
                  <p className="text-gray-500 text-sm mt-2">📞 8047206619</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of Focus */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Artificial Intelligence", desc: "Exploring ML and deep learning concepts", icon: "🤖" },
              { title: "Web Development", desc: "Building modern, responsive applications", icon: "🌐" },
              { title: "Software Development", desc: "Crafting scalable and efficient solutions", icon: "⚙️" },
            ].map((area, idx) => (
              <div key={idx} className="cosmic-card p-6 rounded-xl hover:border-pink-600/50 transition-colors">
                <p className="text-3xl mb-3">{area.icon}</p>
                <h4 className="text-lg font-semibold text-white mb-2">{area.title}</h4>
                <p className="text-gray-400 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
