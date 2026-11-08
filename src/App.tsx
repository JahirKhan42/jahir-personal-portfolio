/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ScrollProgress from './components/ScrollProgress.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Certifications from './components/Certifications.tsx';
import Education from './components/Education.tsx';
import ScienceCreator from './components/ScienceCreator.tsx';
import SocialMedia from './components/SocialMedia.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B12] text-[#F5F7FB] flex flex-col font-body selection:bg-[#4F7CFF]/30 selection:text-white relative">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Translucent Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full focus:outline-none">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <ScienceCreator />
        <SocialMedia />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
