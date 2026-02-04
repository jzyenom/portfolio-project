import Image from "next/image";

const HomePage = () => (
  <>
    <main className="bg-white text-gray-800 font-sans">
      {/* <!-- Header --> */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <div className="text-xl font-bold">LOGO Web Design</div>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            About Me
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact
          </a>
        </nav>
      </header>

      {/* <!-- Hero Section --> */}
      <section className="text-center py-16 bg-gray-100 px-4">
        <h1 className="text-4xl font-extrabold mb-4">DESIGNER</h1>
        <p className="max-w-xl mx-auto text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sit
          praesentium culpa laboriosam quo aut, saepe voluptate esse explicabo
          sint minima?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Hire Me
          </a>
          <a
            href="#"
            className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-50"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* <!-- About Me Section --> */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600">
          Veniam quasi natus consequuntur facilis exercitationem impedit
          perspiciatis aut id ratione earum dolores.
        </p>
      </section>

      {/* <!-- Recent Works --> */}
      <section className="px-6 py-16 bg-gray-100 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">My Recent Works</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded p-4">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Work"
              width={300}
              height={200}
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="font-semibold">UI Design</h3>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Work"
              width={300}
              height={200}
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="font-semibold">UX Project</h3>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Work"
              width={300}
              height={200}
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="font-semibold">Landing Page</h3>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Got a project in mind?
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-orange-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block mb-2">Your Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-orange-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block mb-2">Your Message</label>
            <textarea
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-orange-500"
              rows={5}
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* <!-- Footer --> */}
      <footer className="text-center text-sm text-gray-500 py-6 bg-gray-50">
        <div className="space-x-4 mb-2">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About me
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <div>Terms of Service - Privacy Policy</div>
      </footer>
    </main>
  </>
);

export default HomePage;
