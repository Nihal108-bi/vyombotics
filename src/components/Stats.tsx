/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

import { Users, BookOpen, GraduationCap, Wrench } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Students', color: 'text-blue-400', glow: 'glow-blue' },
  { icon: BookOpen, value: '10+', label: 'Courses', color: 'text-purple-400', glow: 'glow-purple' },
  { icon: GraduationCap, value: '5+', label: 'Expert Teachers', color: 'text-cyan-400', glow: 'glow-cyan' },
  { icon: Wrench, value: '100%', label: 'Hands-On', color: 'text-green-400', glow: 'glow-green' },
];

export default function Stats() {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label, color, glow }) => (
            <div
              key={label}
              className={`card-hover glass rounded-2xl p-6 text-center`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${glow}`}
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div className={`text-3xl font-black mb-1 ${color}`}>{value}</div>
              <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
