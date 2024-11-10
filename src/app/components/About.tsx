export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center space-y-10">
        {/* Text Content */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-5">
            About Me
          </h2>
          <p className="text-lg text-gray-800 mb-5 max-w-xl mx-auto">
            I’m a passionate <span className="font-semibold text-blue-600">Web Developer</span> specializing in creating <span className="font-semibold text-blue-600">responsive</span>, user-friendly websites. I have expertise in <span className="font-semibold text-blue-600">HTML</span>, <span className="font-semibold text-blue-500">CSS</span>, <span className="font-semibold text-blue-600">TypeScript</span>, and <span className="font-semibold text-blue-600">Next.js</span>, and I enjoy solving complex problems through innovative web solutions.
          </p>
          <p className="text-lg text-gray-800 mb-5 max-w-xl mx-auto">
            I’m always exploring new technologies to improve my skills and deliver high-quality web experiences. My focus is on building scalable and maintainable front-end solutions.
          </p>

          {/* Skills or Technologies Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-black mb-5">Technologies I Use:</h3>
            <p className="text-lg text-gray-800 mb-5 max-w-xl mx-auto">
              <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">Next.js</span>, <span className="font-semibold text-blue-600">Tailwind CSS</span>, and <span className="font-semibold text-blue-600">TypeScript</span>.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="#contact" // Link to your contact section
              className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
