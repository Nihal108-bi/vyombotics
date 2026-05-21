import { Hammer, BookMarked, MessageCircle, Award } from 'lucide-react';

const features = [
  {
    icon: Hammer,
    title: 'Hands-On Projects',
    description: 'Every course includes real-world projects. You don\'t just learn theory — you build, break, and ship.',
    color: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/30',
    glow: '0 0 20px rgba(59,130,246,0.3)',
  },
  {
    icon: BookMarked,
    title: 'Industry-Ready Curriculum',
    description: 'Our curriculum is built with industry professionals. Learn what companies actually hire for.',
    color: 'text-purple-400',
    iconBg: 'bg-purple-500/10 border-purple-500/30',
    glow: '0 0 20px rgba(168,85,247,0.3)',
  },
  {
    icon: MessageCircle,
    title: 'Live Doubt Sessions',
    description: 'Never get stuck. Weekly live sessions where instructors answer all your questions in real time.',
    color: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/30',
    glow: '0 0 20px rgba(34,211,238,0.3)',
  },
  {
    icon: Award,
    title: 'Certificate on Completion',
    description: 'Earn a verified certificate for every course you finish. Showcase your skills to employers.',
    color: 'text-green-400',
    iconBg: 'bg-green-500/10 border-green-500/30',
    glow: '0 0 20px rgba(74,222,128,0.3)',
  },
];

export default function WhyVyombotics() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Why <span className="gradient-text">Vyombotics?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We're not just another e-learning platform. We're your launchpad into the future of technology.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description, color, iconBg, glow }) => (
            <div
              key={title}
              className="card-hover glass rounded-2xl p-7 group"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border mb-5 ${iconBg} transition-all duration-300 group-hover:scale-110`}
                style={{ boxShadow: glow }}
              >
                <Icon className={`w-7 h-7 ${color}`} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
