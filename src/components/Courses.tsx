/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

import { ArrowRight, Star } from 'lucide-react';
import { courses, type Course } from '../data/courses.ts';

export default function Courses() {
  return (
    <section id="courses" className="py-20 relative">
      <div className="absolute inset-0 circuit-bg opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            What You'll <span className="gradient-text">Learn</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Industry-aligned courses designed by experts to give you real-world skills and build an impressive portfolio.
          </p>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course: Course) => (
            <div
              key={course.id}
              className="card-hover glass rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${course.tagColor}`}>
                    {course.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${course.badgeColor}`}>
                    {course.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 leading-tight">{course.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{course.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                    />
                  ))}
                  <span className="text-slate-400 text-xs ml-1">{course.rating}</span>
                </div>

                <button className="btn-glow w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 hover:border-blue-500 text-blue-300 hover:text-white font-semibold text-sm rounded-lg transition-all duration-300">
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
