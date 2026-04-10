import React from 'react';  
import ReactDOM from 'react-dom/client';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';  
import InternalAuditorGuide from './InternalAuditorGuide';
import ReferralFactSheet from './ReferralFactSheet';
import ICAPage from './ICAPage';
import AcousticEcologyPage from './AcousticEcologyPage';
import KinkAffirmingPage from './KinkAffirmingPage';
import PresencePage from './PresencePage';
import SomaticSignalsRedirect from './SomaticSignalsRedirect';
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
        <Route path="/somatic-signals" element={<SomaticSignalsRedirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,  
);  