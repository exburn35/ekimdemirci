"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder - Replace with actual image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl overflow-hidden aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image Placeholder</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello, I&apos;m <strong className="text-white">Ekim Demirci</strong>. I&apos;m 34 years old, an{" "}
              <strong className="text-white">SEO Expert and Consultant</strong>, and for{" "}
              <strong className="text-white">over 5 years</strong>, I&apos;ve been helping brands stand out in the digital world. 
              I&apos;ve had the opportunity to work at Turkey&apos;s leading digital agencies, where I both created value for my clients 
              and continuously developed myself.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              SEO is not just a profession for me, it&apos;s also a passion. In every project, I experience the excitement of 
              taking a website from zero to the top. I have expertise in a wide range of areas, from technical SEO to content 
              strategies, from backlink management to data analytics, and I&apos;m ready to put all my knowledge into action for you.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              If you want to <strong className="text-white">increase your website&apos;s visibility</strong> and{" "}
              <strong className="text-white">maximize your organic traffic</strong>, we can turn your goals into reality by working together.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I invite you to join this journey! You can reach out to me to learn more or review my services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

