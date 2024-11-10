export default function Projects() {
  return (
    <section id="projects" className="container mx-auto min-h-screen py-16 px-5 ">
      <h2 className="text-4xl font-bold text-center text-black mb-20">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Makeup Website</h3>
            <p className="text-black mb-4">A five-page website for showcasing makeup services. Includes About, Services, Contact, Vacancy, and Categories pages..</p>
          </div>
          <a href="https://my-first-assignment-a.vercel.app" className="text-blue-700 hover:underline">View Website</a>
        </div>
        {/* Project 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Selling on the Internet Like a Pro</h3>
            <p className="text-black mb-4">This project is a pixel-perfect, fully responsive  website developed using Next.js and Tailwind CSS.</p>
          </div>
          <a href="https://my-figma-assignment-six.vercel.app" className="text-blue-700 hover:underline">View Website</a>
        </div>
        {/* Project 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Shareable and Downloadable Resume</h3>
            <p className="text-black mb-4">A dynamic resume generator where users can edit, share via a unique URL, and download as a PDF..</p>
          </div>
          <a href="https://milestone5by-ashwariya.vercel.app" className="text-blue-700 hover:underline">View Website</a>
        </div>
      </div>
    </section>
  );
}
