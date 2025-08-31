import { useState, useEffect } from 'react';
import { BootSequence } from '@/components/BootSequence';
import { Navigation } from '@/components/Navigation';
import { LandingSection } from '@/components/sections/LandingSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TutorialsSection } from '@/components/sections/TutorialsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { HireSection } from '@/components/sections/HireSection';
import Chatbot from '@/components/Chatbot'; // Importing the Chatbot component

const Index = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [activeSection, setActiveSection] = useState('landing');

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
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="pt-14 pb-20 md:pb-4">
        <div className="animate-fade-in">
          {renderSection()}
        </div>
      </main>
      
      <Chatbot /> {/* Adding the Chatbot component here */}
    </div>
  );
};

export default Index;
