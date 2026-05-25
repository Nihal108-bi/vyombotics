/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Mehta',
    course: 'Robotics Fundamentals',
    review: 'Vyombotics completely changed how I think about tech. The hands-on approach with real robots made concepts click instantly. I built my first autonomous robot in just 6 weeks!',
    avatar: 'https://ui-avatars.com/api/?name=Arjun+Mehta&background=3b82f6&color=fff&size=64&bold=true',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    course: 'Python & Machine Learning',
    review: 'The doubt sessions are a game-changer. Rishabh sir explains everything so clearly. I went from zero Python knowledge to deploying my own ML model in 3 months.',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=a855f7&color=fff&size=64&bold=true',
    rating: 5,
  },
  {
    name: 'Karan Gupta',
    course: 'Web Development',
    review: 'Aanchal ma\'am\'s teaching style is incredible. The curriculum is super practical — we built and deployed real projects. My portfolio now has 5 live websites!',
    avatar: 'https://ui-avatars.com/api/?name=Karan+Gupta&background=06b6d4&color=fff&size=64&bold=true',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.05) 0%, transparent 60%)',
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-yellow-500/30 text-yellow-300 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-yellow-300" />
            Student Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real feedback from real students who transformed their careers with Vyombotics.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-hover glass rounded-2xl p-7 relative">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-blue-500/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.review}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full ring-2 ring-blue-500/40"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-blue-400 text-xs">{t.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
