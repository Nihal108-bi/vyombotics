import { ArrowRight, Play, Cpu, Zap, Code2, Bot, Layers, Globe } from 'lucide-react';

const floatingIcons = [
  { Icon: Cpu, style: 'top-[15%] left-[8%]', delay: '0s', color: 'text-blue-400' },
  { Icon: Bot, style: 'top-[20%] right-[10%]', delay: '1s', color: 'text-purple-400' },
  { Icon: Zap, style: 'top-[60%] left-[5%]', delay: '2s', color: 'text-cyan-400' },
  { Icon: Code2, style: 'top-[70%] right-[8%]', delay: '0.5s', color: 'text-blue-300' },
  { Icon: Layers, style: 'top-[40%] left-[3%]', delay: '1.5s', color: 'text-purple-300' },
  { Icon: Globe, style: 'top-[45%] right-[4%]', delay: '2.5s', color: 'text-cyan-300' },
];

const galleryImages = [
  { src: '/images/gallary/Stud_group_img.jpg', label: 'Student Group' },
  { src: '/images/gallary/student_group_img.jpg', label: 'Learning Together' },
  { src: '/images/gallary/boy.jpg', label: 'Future Innovator' },
  { src: '/images/gallary/boy_with_project.jpg', label: 'Project Builder' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600"
          alt="Tech background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/80 via-[#0a0f1e]/60 to-[#0a0f1e]" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 circuit-bg" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, style, delay, color }, i) => (
        <div
          key={i}
          className={`absolute z-10 hidden lg:block ${style}`}
          style={{ animationDelay: delay }}
        >
          <div
            className={`animate-float w-12 h-12 rounded-xl glass flex items-center justify-center ${color}`}
            style={{ animationDelay: delay }}
          >
            <Icon className="w-6 h-6" />
          </div>
        </div>
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Next-Gen Tech Education Platform
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-white">Launch Your Future in</span>
          <br />
          <span className="gradient-text text-glow-blue">Tech & Robotics</span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Learn AI, Python, Robotics, Web Dev, App Dev, 3D Design and more —{' '}
          <span className="text-blue-300 font-medium">from experts who build the future.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#courses"
            className="btn-glow inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-xl border border-blue-500 w-full sm:w-auto justify-center"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5" />
          </a>
          <button className="group inline-flex items-center gap-3 px-8 py-4 glass text-white font-semibold text-lg rounded-xl hover:border-blue-500/50 transition-all duration-300 w-full sm:w-auto justify-center">
            <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center group-hover:bg-blue-600/50 transition-all">
              <Play className="w-4 h-4 text-blue-300 ml-0.5" />
            </div>
            Watch Intro
          </button>
        </div>

        {/* Gallery Strip */}
        <div className="mt-14">
          <p className="text-center text-white/60 text-xs tracking-widest uppercase mb-5">
            Real Students. Real Projects. Real Impact. 🚀
          </p>
          <div className="marquee-container gallery-mask overflow-hidden">
            <div className="animate-marquee flex" style={{ width: 'max-content' }}>
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <div
                  key={i}
                  className="group relative flex-shrink-0 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] transition-all duration-300"
                  style={{ width: '280px', height: '180px', marginRight: '16px' }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=280&h=180&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-white text-xs font-medium tracking-wide">
                    {img.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex flex-col items-center gap-2 opacity-50">
          <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-slate-400 rounded-full animate-bounce" />
          </div>
          <span className="text-slate-500 text-xs">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
