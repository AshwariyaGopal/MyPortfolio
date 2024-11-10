export default function Contact() {
  return (
    <div className="bg-gray-100">
    <section id="contact" className="container mx-auto py-20 px-5 ">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">Contact Me</h2>
      <form className="max-w-lg mx-auto space-y-4 ">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded border-black border-separate" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded border-black border-separate" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded border-black border-separate " rows = {5}></textarea>
        <button className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </section>
    </div>
  )
}  