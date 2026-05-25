/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Courses from './components/Courses';
import WatchAndLearn from './components/WatchAndLearn';
import Teachers from './components/Teachers';
import WhyVyombotics from './components/WhyVyombotics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#0a0f1e', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <WatchAndLearn />
        <Teachers />
        <WhyVyombotics />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
