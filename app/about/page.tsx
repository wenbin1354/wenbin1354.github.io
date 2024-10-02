export default function About() {
    return (
      <main className="min-h-screen p-4 md:p-24 pt-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-indigo-400">About Me</h1>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-emerald-400">Introduction</h2>
              <p className="text-gray-300 mb-4">
                Hello! I&apos;m WenBin, a passionate software engineer with 2 years of experience in building web applications.
                I specialize in React, Node.js, and cloud technologies.
              </p>
              <p className="text-gray-300 mb-4">
                During my free time, I&apos;ll be reading novels and playing games.
                I also believe in continuous learning and always strive to stay updated with the latest tech trends.
              </p>
            </div>
  
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-emerald-400">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'Node.js', 'TypeScript','JavaScript', 'AWS', 'Docker', 'GraphQL', 'MongoDB', 'Python','Django','Unity','Flutter', 'Git'].map((skill) => (
                  <div key={skill} className="bg-gray-700 rounded-lg p-3 text-center">
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-emerald-400">My Interests</h2>
              <div className="flex flex-wrap gap-2">
                {['Gaming', 'Reading'].map((interest) => (
                  <span key={interest} className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
  
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-emerald-400">My Journey</h2>
              <div className="relative border-l-2 border-indigo-500 pl-8 py-4 space-y-8">
                <div>
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] mt-1"></div>
                  <h3 className="text-lg font-semibold text-white">Started Coding</h3>
                  <p className="text-indigo-300">2019</p>
                </div>
                <div>
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] mt-1"></div>
                  <h3 className="text-lg font-semibold text-white">Graduated University</h3>
                  <p className="text-indigo-300">2024</p>
                </div>
                <div>
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] mt-1"></div>
                  <h3 className="text-lg font-semibold text-white">Software Engineer</h3>
                  <p className="text-indigo-300">2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }