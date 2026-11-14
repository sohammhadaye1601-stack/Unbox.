import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DownloadBannerSection } from './components/DownloadBannerSection';
import { CustomerSupportSection } from './components/CustomerSupportSection';
import { AboutSection } from './components/AboutSection';
import { WhyUnboxSection } from './components/WhyUnboxSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DownloadBannerSection />
        <CustomerSupportSection />
        <AboutSection />
        <WhyUnboxSection />
        <AppShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
