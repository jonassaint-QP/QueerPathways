import React from 'react';

interface LeavesSiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LeavesSiteModal: React.FC<LeavesSiteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020501]/80 p-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="leaves-site-title"
        aria-describedby="leaves-site-description"
        className="w-full max-w-md rounded-lg border border-[#3E6830] bg-[#153009] p-6 shadow-2xl"
      >
        <h1 id="leaves-site-title" className="mb-4 text-xl font-semibold text-[#CBB26A]">
          Leaving Clinical Portal
        </h1>
        <p id="leaves-site-description" className="mb-6 text-sm leading-relaxed text-[#C0BFBC]">
          You&apos;re leaving the Queer Pathways clinical portal and heading to our retail storefront at
          queerpathways.com. Your clinical data stays here. Browse freely.
        </p>
        <div className="flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-[#CCDEE0] transition-colors hover:text-[#CBB26A]"
          >
            Stay on Clinical Site
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded bg-[#D3B127] px-5 py-2 text-sm font-medium text-[#020501] transition-colors hover:bg-[#CBB26A]"
          >
            Continue to Storefront
          </button>
        </div>
      </div>
    </div>
  );
};