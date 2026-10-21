import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SummerCampsPage } from './pages/SummerCampsPage';
import { MediumDetailPage } from './pages/MediumDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync with browser back/forward or hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'fine-arts',
        'graphic-design',
        'mehandi-makeup',
        'summer-camps',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initialize if hash exists
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'summer-camps':
        return <SummerCampsPage onNavigate={handleNavigate} />;
      case 'fine-arts':
      case 'graphic-design':
      case 'mehandi-makeup':
        return (
          <MediumDetailPage mediumId={currentPage} onNavigate={handleNavigate} />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#4A6163]">
      {/* Sticky 3-zone Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Footer with Studio statement and navigation */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
