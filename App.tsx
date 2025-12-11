import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { DashboardInfo } from './components/DashboardInfo';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenLogin={openModal} />
      
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <DashboardInfo />
      </main>

      <Footer />
      
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;