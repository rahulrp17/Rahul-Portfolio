import { motion } from "framer-motion";

const stats = [
  {
    number: "6+",
    title: "Projects Built",
  },
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Responsive Design",
  },
  {
    number: "24/7",
    title: "Learning",
  },
];

export default function Stats() {
  return (
    <section className="px-6 lg:px-20 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-3xl
              p-8
              text-center
              hover:border-orange-500
              hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]
              transition-all
            "
          >
            <h2 className="text-4xl font-bold text-orange-500 mb-2">
              {item.number}
            </h2>

            <p className="text-gray-400">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}