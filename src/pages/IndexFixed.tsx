import { useState, useEffect } from 'react';
import { BootSequence } from '@/components/BootSequence';
import { Navigation } from '@/components/Navigation';
import { LandingSection } from '@/components/sections/LandingSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TutorialsSection } from '@/components/sections/TutorialsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { HireSection } from '@/components/sections/HireSection';
import Chatbot from '@/components/Chatbot';
import { useTheme } from 'next-themes';

const IndexFixed = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [activeSection, setActiveSection] = useState('landing');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleBootComplete = () => {
    setShowBoot(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'landing':
        return <LandingSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return <AboutSection />;
      case 'tutorials':
        return <TutorialsSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'hire':
        return <HireSection />;
      default:
        return <LandingSection />;
    }
  };

  if (showBoot) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <div
      className="min-h-screen bg-background dark:bg-black"
      style={{
        backgroundImage: isDark ? "url('/dark-background.jpg')" : "url('/light-background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transition: 'background-image 0.5s ease-in-out',
        backgroundColor: isDark ? '#000000' : undefined,
      }}
    >
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="pt-14 pb-20 md:pb-4">
        <div className="opacity-100 transition-opacity duration-500">
          {renderSection()}
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

export default IndexFixed;
