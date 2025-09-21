

import React from "react";

const projects = [
  {
    title: "Blood Management System",
    description:
      "Created a Blood Management System using HTML, CSS, and PHP to efficiently manage blood donations. Worked as part of a 2-member team.",
    tech: "HTML, CSS, PHP, JavaScript",
  },
  {
    title: "Blogging Site",
    description:
      "Developed a blogging site in React for data, media, and user management using Appwrite services. Utilized Redux, React Hook Form, and Tailwind CSS.",
    tech: "React, Tailwind CSS, Appwrite, Redux, React Hook Form",
    github: "https://github.com/Shyam8182/bloging-Site",
  },
];

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "PHP",
  "Python",
  "C++",
  "Gujarati",
  "Hindi",
  "English",
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Shyam Zapda</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am Shyam Zapda, a passionate web developer proficient in HTML,
            CSS, and JavaScript. Skilled in crafting responsive, visually
            appealing, and user-friendly websites. Adept at translating design
            concepts into dynamic, interactive web solutions using React and
            Node.js. Strong problem-solving and debugging abilities. Committed
            to staying current with web development trends and technologies.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/yourgithubid" // Replace with your photo URL or GitHub avatar
            alt="Shyam Zapda"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-white py-16 border-t border-b border-gray-300"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">
            Skills
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center text-lg font-semibold text-gray-700">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-indigo-100 rounded-lg py-3 shadow hover:bg-indigo-200 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">
          Projects
        </h2>
        <div className="grid gap-10 max-w-5xl mx-auto md:grid-cols-2">
          {projects.map(({ title, description, tech, github }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="mb-3 text-gray-700">{description}</p>
              <p className="mb-3 font-mono text-indigo-600">Tech: {tech}</p>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-indigo-600 hover:underline"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-indigo-600 text-white py-16 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6 text-lg max-w-xl text-center">
          Feel free to reach out to me for collaborations, job opportunities,
          or just to say hello!
        </p>
        <div className="space-y-3 text-center">
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+919725756932"
              className="underline hover:text-indigo-300"
            >
              +91 9725756932
            </a>
          </p>
          <p>
            📧 Email:{" "}
            <a
              href="mailto:zapadashyam@gmail.com"
              className="underline hover:text-indigo-300"
            >
              zapadashyam@gmail.com
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/shyam-zapda"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-300"
            >
              Shyam Zapda
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Shyam8182"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-300"
            >
              github.com/Shyam8182
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        &copy; {new Date().getFullYear()} Shyam Zapda. All rights reserved.
      </footer>
    </div>
  );
}



