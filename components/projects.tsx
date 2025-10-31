export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white text-center">
          Projects & <span className="gradient-text">Work</span>
        </h2>

        <div className="glass-effect border border-primary/20 rounded-lg p-12 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">🚀</div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Projects Coming Soon</h3>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            I'm currently working on exciting projects that showcase my skills in AI, web development, and software
            engineering. Check back soon for updates!
          </p>
          <p className="text-gray-500 italic">Building innovative solutions with cutting-edge technologies...</p>
        </div>

        {/* Future projects placeholder */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="glass-effect border border-secondary/20 rounded-lg p-6 opacity-50 hover:opacity-75 transition-opacity"
            >
              <div className="h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-600">Project {item} - Under Development</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Project Title</h4>
              <p className="text-gray-500 text-sm">More details coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
