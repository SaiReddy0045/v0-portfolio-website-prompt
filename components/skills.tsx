export default function Skills() {
  const programmingSkills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 88 },
    { name: "C/C++", level: 85 },
  ]

  const areasOfInterest = [
    { name: "Artificial Intelligence", level: 85 },
    { name: "Web Development", level: 87 },
    { name: "Software Development", level: 86 },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, rgba(185, 29, 143, 0.4), transparent)" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white text-center">
          Technical <span className="gradient-text">Arsenal</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-2">
              <span>💻</span> Programming Languages
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Interest */}
          <div>
            <h3 className="text-2xl font-bold text-pink-400 mb-8 flex items-center gap-2">
              <span>🚀</span> Areas of Interest
            </h3>
            <div className="space-y-6">
              {areasOfInterest.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-pink-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Competencies */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "📊", name: "Data Structures" },
              { icon: "🔧", name: "Algorithms" },
              { icon: "🧠", name: "Problem Solving" },
              { icon: "🏗️", name: "OOP" },
              { icon: "🎨", name: "Web Technologies" },
              { icon: "🤖", name: "Machine Learning" },
            ].map((comp, index) => (
              <div
                key={index}
                className="cosmic-card p-6 rounded-lg text-center hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <p className="text-2xl mb-2">{comp.icon}</p>
                <p className="text-cyan-400 font-semibold text-sm">{comp.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
