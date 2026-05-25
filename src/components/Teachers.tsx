/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

import { useState, useEffect, useRef } from 'react';
import { Code2, ExternalLink, Star, Users, ChevronLeft, ChevronRight, Crown } from 'lucide-react';
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

function glowColor(badgeColor: string) {
  const map: Record<string, string> = {
    purple: 'rgba(168,85,247,0.45)',
    blue:   'rgba(59,130,246,0.45)',
    cyan:   'rgba(6,182,212,0.45)',
    green:  'rgba(16,185,129,0.45)',
    pink:   'rgba(236,72,153,0.45)',
    orange: 'rgba(249,115,22,0.45)',
    violet: 'rgba(139,92,246,0.45)',
  };
  return map[badgeColor] ?? 'rgba(255,255,255,0.1)';
}

function TeacherCard({ teacher, cardWidth }: { teacher: Teacher; cardWidth: number }) {
  const colors = colorMap[teacher.badgeColor] || colorMap.blue;
  const isFeatured = teacher.featured;

  return (
    <div
      className="flex-shrink-0 rounded-2xl p-6 flex flex-col card-3d-tilt"
      style={{
        width: `${cardWidth}px`,
        minWidth: `${cardWidth}px`,
        background: isFeatured ? 'rgba(109,40,217,0.08)' : 'rgba(255,255,255,0.05)',
        border: isFeatured ? '1px solid rgba(168,85,247,0.4)' : '1px solid rgba(255,255,255,0.1)',
        boxShadow: isFeatured
          ? '0 0 40px rgba(168,85,247,0.2), 0 0 80px rgba(168,85,247,0.05)'
          : undefined,
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Crown badge for featured */}
      {isFeatured && (
        <div className="flex items-center justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/40">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-xs font-bold tracking-wide">Academic Head</span>
          </div>
        </div>
      )}

      {/* Avatar */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-24 h-24">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&background=2563eb&color=fff&size=128&bold=true`;
            }}
            className={`w-full h-full rounded-full ring-2 ${colors.ring} object-cover object-top`}
            style={{ boxShadow: `0 0 20px ${glowColor(teacher.badgeColor)}` }}
          />
          {isFeatured && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-yellow-900 fill-yellow-900" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${colors.badge}`}>
          {teacher.badge}
        </div>

        <h3 className="font-bold text-white text-lg mb-0.5">{teacher.name}</h3>
        <p className={`font-semibold text-sm mb-3 ${colors.text}`}>{teacher.role}</p>

        <div className="flex flex-wrap gap-1.5 mb-3 justify-center">
          {teacher.expertise.map((tag) => (
            <span key={tag} className={`px-2 py-0.5 rounded-md text-xs font-medium ${colors.bg} ${colors.text}`}>
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{teacher.bio}</p>

        <div className="flex items-center gap-3 justify-center">
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1024);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track container width for responsive card sizing
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Cleanup resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const cardsPerView = containerWidth < 640 ? 1 : containerWidth < 1024 ? 2 : 3;
  const gap = 24;
  const cardWidth = Math.max(280, Math.floor((containerWidth - gap * (cardsPerView - 1)) / cardsPerView));
  const maxIndex = Math.max(0, teachers.length - cardsPerView);
  const offset = Math.min(currentIndex, maxIndex) * (cardWidth + gap);

  const pauseTemporarily = () => {
    setIsAutoPlaying(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
    pauseTemporarily();
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
    pauseTemporarily();
  };

  return (
    <section id="teachers" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(109,40,217,0.05) 0%, transparent 70%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Meet Our <span className="gradient-text">Dream Team</span> 🚀
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-2">
            The passionate experts behind Vyombotics — building the next generation of tech innovators.
          </p>
          <p className="text-slate-500 text-sm">Swipe to meet the experts → auto-rotating every 3s</p>
        </div>

        {/* Carousel wrapper */}
        <div
          className="relative px-10 sm:px-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => {
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
            setIsAutoPlaying(true);
          }}
        >
          {/* Prev button */}
          <button
            onClick={goPrev}
            aria-label="Previous teacher"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Track */}
          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap: `${gap}px`,
                transform: `translateX(-${offset}px)`,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {teachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} cardWidth={cardWidth} />
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            aria-label="Next teacher"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {teachers.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                pauseTemporarily();
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
