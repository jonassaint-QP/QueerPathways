import React from 'react';  
import ReactDOM from 'react-dom/client';  
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';  
import InternalAuditorGuide from './InternalAuditorGuide';
import ReferralFactSheet from './ReferralFactSheet';
import ICAPage from './ICAPage';
import AcousticEcologyPage from './AcousticEcologyPage';
import PresencePage from './PresencePage';
import KinkAffirmingPage from './KinkAffirmingPage';
import FeeDisclosurePage from './FeeDisclosurePage';
import PrivacyPage from './PrivacyPage';
import NotFoundPage from './NotFoundPage';
import SovereignHarbor from './app/sovereign-harbor/page';
import IntakeTerminalPage from './IntakeTerminalPage';
import ShopPage from './ShopPage';
import './index.css';

/**  
 * Queer Pathways - Digital Sanctuary Entry Point  
 * Linking the structural scaffolding to the DOM.  
 */  
ReactDOM.createRoot(document.getElementById('root')!).render(  
  <React.StrictMode>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
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
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/queertimes" element={<Navigate to="https://mediumseagreen-gnu-447320.hostingersite.com/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,  
);  