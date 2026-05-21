import { Code2, ExternalLink, Star, Users } from 'lucide-react';
import { teachers, type Teacher } from '../data/teachers.ts';

const colorMap: Record<string, { ring: string; text: string; badge: string; bg: string }> = {
  purple: { ring: 'ring-purple-500', text: 'text-purple-300', badge: 'bg-purple-500/20 text-purple-200 border-purple-500/40', bg: 'bg-purple-500/10' },
  blue:   { ring: 'ring-blue-500',   text: 'text-blue-300',   badge: 'bg-blue-500/20 text-blue-200 border-blue-500/40',     bg: 'bg-blue-500/10' },
  cyan:   { ring: 'ring-cyan-500',   text: 'text-cyan-300',   badge: 'bg-cyan-500/20 text-cyan-200 border-cyan-500/40',     bg: 'bg-cyan-500/10' },
  green:  { ring: 'ring-green-500',  text: 'text-green-300',  badge: 'bg-green-500/20 text-green-200 border-green-500/40',  bg: 'bg-green-500/10' },
  pink:   { ring: 'ring-pink-500',   text: 'text-pink-300',   badge: 'bg-pink-500/20 text-pink-200 border-pink-500/40',     bg: 'bg-pink-500/10' },
  orange: { ring: 'ring-orange-500', text: 'text-orange-300', badge: 'bg-orange-500/20 text-orange-200 border-orange-500/40', bg: 'bg-orange-500/10' },
  violet: { ring: 'ring-violet-500', text: 'text-violet-300', badge: 'bg-violet-500/20 text-violet-200 border-violet-500/40', bg: 'bg-violet-500/10' },
};

function TeacherCard({ teacher, featured = false }: { teacher: Teacher; featured?: boolean }) {
  const colors = colorMap[teacher.badgeColor] || colorMap.blue;

  return (
    <div
      className={`card-hover glass rounded-2xl overflow-hidden flex ${
        featured ? 'flex-row items-center gap-8 p-8' : 'flex-col p-6'
      }`}
      style={featured ? {
        background: 'rgba(109, 40, 217, 0.08)',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        boxShadow: '0 0 40px rgba(168, 85, 247, 0.15), 0 0 80px rgba(168, 85, 247, 0.05)',
      } : {}}
    >
      {/* Avatar */}
      <div className={`flex-shrink-0 ${featured ? '' : 'flex flex-col items-center mb-4'}`}>
        <div className={`relative ${featured ? 'w-32 h-32' : 'w-24 h-24'}`}>
          <img
            src={teacher.avatar}
            alt={teacher.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&background=2563eb&color=fff&size=128&bold=true`;
            }}
            className={`w-full h-full rounded-full ring-3 ${colors.ring} object-cover object-top transition-transform duration-300 hover:scale-105`}
            style={{ boxShadow: `0 0 20px ${teacher.badgeColor === 'purple' ? 'rgba(168,85,247,0.4)' : teacher.badgeColor === 'blue' ? 'rgba(59,130,246,0.4)' : teacher.badgeColor === 'cyan' ? 'rgba(6,182,212,0.4)' : teacher.badgeColor === 'green' ? 'rgba(16,185,129,0.4)' : teacher.badgeColor === 'pink' ? 'rgba(236,72,153,0.4)' : teacher.badgeColor === 'orange' ? 'rgba(249,115,22,0.4)' : teacher.badgeColor === 'violet' ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.1)'}` }}
          />
          {featured && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-yellow-900 fill-yellow-900" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`flex-1 ${featured ? '' : 'text-center'}`}>
        {/* Badge */}
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${colors.badge}`}>
          {teacher.badge}
        </div>

        <h3 className={`font-bold text-white mb-0.5 ${featured ? 'text-2xl' : 'text-lg'}`}>
          {teacher.name}
        </h3>
        <p className={`font-semibold mb-3 ${colors.text} ${featured ? 'text-base' : 'text-sm'}`}>
          {teacher.role}
        </p>

        {/* Expertise tags */}
        <div className={`flex flex-wrap gap-1.5 mb-3 ${featured ? '' : 'justify-center'}`}>
          {teacher.expertise.map((tag) => (
            <span key={tag} className={`px-2 py-0.5 rounded-md text-xs font-medium ${colors.bg} ${colors.text}`}>
              {tag}
            </span>
          ))}
        </div>

        <p className={`text-slate-400 text-sm leading-relaxed mb-4 ${featured ? 'max-w-lg' : ''}`}>
          {teacher.bio}
        </p>

        {/* Actions */}
        <div className={`flex items-center gap-3 ${featured ? '' : 'justify-center'}`}>
          {teacher.github && (
            <a
              href={teacher.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg hover:border-slate-400/50 text-slate-400 hover:text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <Code2 className="w-4 h-4" />
            </a>
          )}
          {teacher.linkedin && (
            <a
              href={teacher.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-glow flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 ${colors.badge} hover:opacity-90`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Teachers() {
  const featured = teachers.find((t: Teacher) => t.featured)!;
  const rest = teachers.filter((t: Teacher) => !t.featured);

  return (
    <section id="teachers" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(109,40,217,0.05) 0%, transparent 70%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Meet Our <span className="gradient-text">Dream Team</span> 🚀
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The passionate experts behind Vyombotics — building the next generation of tech innovators.
          </p>
        </div>

        {/* Featured: Academic Head */}
        <div className="mb-8">
          <TeacherCard teacher={featured} featured />
        </div>

        {/* Rest of team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rest.map((teacher: Teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
