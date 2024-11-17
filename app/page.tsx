import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

export default function Home() {
  return (
    <main className="text-center flex flex-col items-center p-4">
      {/* Name */}
      <h1 className="text-4xl font-bold text-white mb-6">Matthew Holandez</h1>

      {/* Face */}
      <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-gray-800 mb-6">
        <Image
          src="/profile.jpg"
          alt="Matthew Holandez"
          width={192}
          height={192}
          className="object-cover"
        />
      </div>

      {/* Social links */}
      <div className="flex space-x-6 mb-6">
        <a
          href="https://github.com/matthewholandez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/matthewholandez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:me@matthewholandez.com"
          className="text-gray-400 hover:text-white text-2xl transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-lg text-gray-400 max-w-2xl">
        I'm a high school student and I love making things that make life easier. Feel free to reach out at any time!
      </p>
    </main>
  );
}
