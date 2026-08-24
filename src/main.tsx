import React from 'react';  
import ReactDOM from 'react-dom/client';  
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import App from './App';  
import { InternalAuditorGuide } from './pages/InternalAuditorGuide';
import { ReferralFactSheet } from './pages/ReferralFactSheet';
import { ICAPage } from './pages/ICAPage';
import AcousticEcologyPage from './AcousticEcologyPage';
import { PresencePage } from './pages/PresencePage';
import KinkAffirmingPage from './KinkAffirmingPage';
import FeeDisclosurePage from './FeeDisclosurePage';
import PrivacyPage from './PrivacyPage';
import NotFoundPage from './NotFoundPage';
import SovereignHarbor from './app/sovereign-harbor/page';
import IntakeTerminalPage from './IntakeTerminalPage';
import ShopPage from './ShopPage';
import CartPage from './CartPage';
import OrderConfirmationPage from './OrderConfirmationPage';
import PhilosophyPage from './PhilosophyPage';
import TeamPage from './TeamPage';
import ServicesPage from './ServicesPage';
import { CartProvider } from './CartContext';
import EventsPage from './EventsPage';
import BlogPage from './BlogPage';
import ArchitecturePage from './blog/ArchitecturePage';
import AdvocacyPage from './blog/AdvocacyPage';
import SovereigntyPage from './blog/SovereigntyPage';
import SubstackPage from './SubstackPage';
import LinkedInPage from './LinkedInPage';
import DistributionSetupPage from './DistributionSetupPage';
import { LeavesSiteModal } from './components/LeavesSiteModal';
import './index.css';

const RETAIL_HOSTS = new Set(['queerpathways.com', 'www.queerpathways.com']);
const CLINICAL_HOSTS = new Set(['queerpathways.org', 'www.queerpathways.org']);

function DomainHome() {
  return RETAIL_HOSTS.has(window.location.hostname) ? <ShopPage /> : <App />;
}

function DomainShop() {
  const navigate = useNavigate();

  if (!CLINICAL_HOSTS.has(window.location.hostname)) return <ShopPage />;

  return (
    <LeavesSiteModal
      isOpen
      onClose={() => navigate('/')}
      onConfirm={() => window.location.assign('https://queerpathways.com')}
    />
  );
}

/**  
 * Queer Pathways - Digital Sanctuary Entry Point  
 * Linking the structural scaffolding to the DOM.  
 */  
ReactDOM.createRoot(document.getElementById('root')!).render(  
  <React.StrictMode>  
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<DomainHome />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resources/internal-auditor-guide" element={<InternalAuditorGuide />} />
          <Route path="/referral" element={<ReferralFactSheet />} />
          <Route path="/ica" element={<ICAPage />} />
          <Route path="/acoustic-ecology" element={<AcousticEcologyPage />} />
          <Route path="/kink-affirming" element={<KinkAffirmingPage />} />
          <Route path="/presence" element={<PresencePage />} />
          <Route path="/fee-disclosure" element={<FeeDisclosurePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/sovereign-harbor" element={<SovereignHarbor />} />
          <Route path="/contact" element={<IntakeTerminalPage />} />
          <Route path="/intake-terminal" element={<IntakeTerminalPage />} />
          <Route path="/shop" element={<DomainShop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/architecture" element={<ArchitecturePage />} />
          <Route path="/blog/advocacy" element={<AdvocacyPage />} />
          <Route path="/blog/sovereignty" element={<SovereigntyPage />} />
          <Route path="/substack" element={<SubstackPage />} />
          <Route path="/linkedin" element={<LinkedInPage />} />
          <Route path="/distribution" element={<DistributionSetupPage />} />
          <Route path="/queertimes" element={<Navigate to="https://mediumseagreen-gnu-447320.hostingersite.com/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,  
);  