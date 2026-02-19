import { Mail, Github, ExternalLink, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6"
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="../src/img/JayzPic.jpg"
              alt="Alubari Jason Lekia"
              className="w-36 h-36 rounded-full object-cover border-4 border-indigo-400/40 shadow-lg"
            />
          </div>

          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Alubari Jason Lekia
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Mobile Application Developer specializing in Java, Flutter & React Native
            — crafting scalable, high-performance, and beautiful mobile
            experiences.
          </p>

          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <a
              href="mailto:studiosjayz@gmail.com"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-2xl hover:bg-white/20 transition"
            >
              <Mail size={18} /> Contact Me
            </a>

            <a
              href="https://github.com/JayzStudios"
              target="_blank"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-2xl hover:bg-white/20 transition"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl shadow-xl">
            <div className="p-8 space-y-4">
              <h2 className="text-3xl font-semibold">About Me</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Hello there, Pleasure to meet you, let me tell you more about myself. I am a cross-platform mobile developer focused on building
                modern, responsive, and high-performance applications using
                Flutter, Java, Python and React Native. I prioritize clean architecture,
                intuitive UI/UX, and seamless API integrations to deliver
                reliable production-ready mobile solutions. Let&apos;s get to work!
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl shadow-xl">
            <div className="p-8 space-y-6">
              <h2 className="text-3xl font-semibold">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-300 text-lg">
                <div>Flutter (Dart)</div>
                <div>React Native</div>
                <div>Java</div>
                <div>Python</div>
                <div>REST API Integration</div>
                <div>Firebase (Auth & Firestore)</div>
                <div>State Management</div>
                <div>UI/UX Implementation</div>
                <div>Performance Optimization</div>
                <div>Git & Version Control</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-center">
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Keansburg */}
            <div className="bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold">KeansBurg Park Website</h3>
                <p className="text-slate-300 text-lg">
                  The Keansburg Park website which include all the attraction of the park and also let&apos;s the user to book the ticket online.
                </p>
                <p className="text-slate-400">
                  Tech: React, HTML, Java.
                </p>

                <div className="flex gap-3 pt-4 flex-wrap">
                  <a
                    href="https://drive.google.com/file/d/1VZonP19AnWDUIpTjdnvxgQKlcVMpPAk4/view?usp=drive_link"
                    target="_blank"
                    className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-4 py-2 rounded-xl hover:bg-indigo-500/30 transition"
                  >
                    <ExternalLink size={16} /> View Demo
                  </a>

                  <a
                    href="https://teal-pika-23b173.netlify.app/"
                    target="_blank"
                    className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 px-4 py-2 rounded-xl hover:bg-cyan-500/30 transition"
                  >
                    <Download size={16} /> Download APK
                  </a>
                </div>
              </div>
            </div>

            {/* Weather App */}
            <div className="bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold">
                  Weather App (Flutter)
                </h3>
                <p className="text-slate-300 text-lg">
                  Real-time weather forecasting app with location-based
                  updates and dynamic UI based on weather conditions.
                </p>
                <p className="text-slate-400">
                  Tech: Flutter, Weather API, State Management
                </p>

                <div className="flex gap-3 pt-4 flex-wrap">
                  <a
                    href="#YOUR_WEATHER_DEMO_LINK"
                    target="_blank"
                    className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-4 py-2 rounded-xl hover:bg-indigo-500/30 transition"
                  >
                    <ExternalLink size={16} /> View Demo
                  </a>

                  <a
                    href="#YOUR_WEATHER_APK_LINK"
                    target="_blank"
                    className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 px-4 py-2 rounded-xl hover:bg-cyan-500/30 transition"
                  >
                    <Download size={16} /> Download APK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center text-slate-400 pt-10 border-t border-white/10">
          <p className="text-lg">
            © {new Date().getFullYear()} Alubari Jason Lekia • Mobile Developer
          </p>
          <p className="text-sm mt-2">
            Shareable Portfolio Link will be available after deployment
          </p>
        </footer>
      </div>
    </div>
  );
}

