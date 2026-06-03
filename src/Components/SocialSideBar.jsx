import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div
      className="
        fixed
        left-4
        top-1/2
        -translate-y-1/2
        hidden
        lg:flex
        flex-col
        gap-4
        z-50
      "
    >
      <a
        href="https://github.com/rahulrp17"
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-white/10 rounded-full hover:bg-orange-500 transition"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-white/10 rounded-full hover:bg-orange-500 transition"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="mailto:your@email.com"
        className="p-3 bg-white/10 rounded-full hover:bg-orange-500 transition"
      >
        <FaEnvelope size={20} />
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        className="p-3 bg-white/10 rounded-full hover:bg-orange-500 transition"
      >
        <FaFilePdf size={20} />
      </a>
    </div>
  );
}