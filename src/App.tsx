/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Music, 
  Award, 
  Clock, 
  ExternalLink,
  ChevronDown,
  Volume2
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ALBUMS = [
  {
    title: "After Hours",
    year: "2020",
    cover: "https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=600",
    color: "#E11D48"
  },
  {
    title: "Starboy",
    year: "2016",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600",
    color: "#1E3A8A"
  },
  {
    title: "Beauty Behind the Madness",
    year: "2015",
    cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600",
    color: "#FFFFFF"
  },
  {
    title: "Dawn FM",
    year: "2022",
    cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=600",
    color: "#4B5563"
  }
];

const AWARDS = [
  { category: "Grammy Awards", count: 4, icon: <Award className="w-5 h-5 text-yellow-500" /> },
  { category: "Billboard Music Awards", count: 20, icon: <Award className="w-5 h-5 text-blue-500" /> },
  { category: "Juno Awards", count: 17, icon: <Award className="w-5 h-5 text-red-500" /> },
  { category: "American Music Awards", count: 6, icon: <Award className="w-5 h-5 text-purple-500" /> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("all");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative min-h-screen selection:bg-brand-red selection:text-white">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full starboy-gradient opacity-40" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-red/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-sm bg-black/20 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display font-bold text-xl tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center">
            <Volume2 className="w-4 h-4 text-black" />
          </div>
          <span className="uppercase">Starboy.fm</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 items-center text-xs uppercase tracking-widest font-medium">
          {["Music", "About", "Awards", "Store"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: "var(--color-brand-red)", y: -2 }}
              className="text-white/60 transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-[10px]"
          >
            LATEST DROPS
          </motion.button>
        </div>
      </nav>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-red z-[60] origin-left"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="h-screen flex flex-col justify-center items-center relative overflow-hidden scanline px-6">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 z-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <img 
              src="https://images.unsplash.com/photo-1514525253361-b83a85f08a71?auto=format&fit=crop&q=80&w=1920" 
              alt="Live Concert Atmosphere"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>

          <div className="container mx-auto relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-brand-red font-display text-sm tracking-[0.5em] uppercase mb-4 font-bold">The Starboy Era</h2>
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-display font-black uppercase tracking-tighter leading-none mb-4">
                The<br />Weeknd
              </h1>
              <p className="max-w-md mx-auto text-white/40 text-sm md:text-base mb-10 leading-relaxed font-light">
                Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer-songwriter and record producer. 
                He is known for his sonic versatility and dark lyricism.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-brand-red text-black font-bold px-10 py-4 rounded-full flex items-center gap-2 group transition-all"
                >
                  LISTEN NOW
                  <Music className="w-4 h-4 group-hover:animate-bounce" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md text-white font-bold px-10 py-4 rounded-full border border-white/20 transition-all"
                >
                  VIEW TOUR
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* Music Section */}
        <section id="music" className="py-32 px-6 bg-black">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h3 className="text-brand-red font-display text-xs tracking-[0.3em] uppercase mb-2">Discography</h3>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase">Major Works</h2>
              </div>
              <div className="flex gap-4 text-[10px] tracking-widest font-bold text-white/40 uppercase">
                {["All", "Studio Albums", "Mixtapes"].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`cursor-pointer transition-colors ${activeTab === tab.toLowerCase() ? "text-brand-red" : "hover:text-white"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ALBUMS.map((album, index) => (
                <motion.div
                  key={album.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-white/5 shadow-2xl">
                    <img 
                      src={album.cover} 
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                        <Music className="w-6 h-6 fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold uppercase tracking-tight text-lg group-hover:text-brand-red transition-colors">
                      {album.title}
                    </h4>
                    <div className="flex justify-between items-center text-white/40 text-[10px] font-bold tracking-widest uppercase">
                      <span>{album.year}</span>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: album.color }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 blur-[100px]" />
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800" 
                  alt="The Weeknd Close-up"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-xl max-w-[240px]">
                <Clock className="w-6 h-6 text-brand-red mb-4" />
                <p className="text-xs italic leading-relaxed text-white/70">
                  "I was always a storyteller. I always wanted to be more than just a singer."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-brand-red font-display text-xs tracking-[0.3em] uppercase mb-2">The Journey</h3>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 leading-tight">
                From the shadows<br />to the starfield
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed font-light">
                <p>
                  Born and raised in Toronto, Abel Tesfaye's career began with mysterious mixtapes uploaded to YouTube in late 2010. 
                  His unique blend of dark R&B, pop, and electronic influences redefined a genre.
                </p>
                <p>
                  With a persona that shifts with every era—from the tangled dreadlock days of *Beauty Behind the Madness* to the 
                  bloodied, bandage-wrapped *After Hours*—The Weeknd has proven himself as one of the most visionary visual and 
                  musical artists of the 21st century.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-8 py-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-display font-black text-brand-red">100M+</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Spotify Monthly Listeners</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-black text-brand-red">#1</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Global Artist Status</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-32 px-6 bg-white/5 backdrop-blur-sm border-y border-white/5">
          <div className="container mx-auto text-center mb-16">
            <h3 className="text-brand-red font-display text-xs tracking-[0.3em] uppercase mb-2">Recognition</h3>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase">Legendary Status</h2>
          </div>
          
          <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
            {AWARDS.map((award, index) => (
              <motion.div
                key={award.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  {award.icon}
                </div>
                <div>
                  <div className="text-4xl font-display font-black mb-1">{award.count}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold max-w-[120px]">
                    {award.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Social Feed / CTA */}
        <section id="social" className="py-32 px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-stroke text-6xl md:text-9xl font-display font-black uppercase mb-8 opacity-20">FOLLOW THE LIGHT</h2>
            <div className="flex gap-12 justify-center mb-16">
              <motion.a whileHover={{ scale: 1.2, color: "#E1306C" }} href="#"><Instagram /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "#1DA1F2" }} href="#"><Twitter /></motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "#FF0000" }} href="#"><Youtube /></motion.a>
            </div>
            
            <div className="glass-card p-1 items-center rounded-full inline-flex max-w-md w-full overflow-hidden">
              <input 
                type="email" 
                placeholder="JOIN THE XO CREW" 
                className="bg-transparent border-none focus:ring-0 text-xs px-6 py-4 w-full outline-none"
              />
              <button className="bg-white text-black text-[10px] font-bold px-8 py-3 rounded-full hover:bg-brand-red hover:text-white transition-colors uppercase whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
          <div>© 2026 THE WEEKND / REPUBLIC RECORDS</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Store Policy</a>
          </div>
          <div className="flex items-center gap-2">
            DESIGNED FOR THE XO CREW <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </footer>
    </div>
  );
}
