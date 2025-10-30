'use client'
import { Github} from 'lucide-react';   
import { useState, useEffect } from 'react';
import { Coffee } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";
import CreatorNoteModal from './createNoteModel';


export default function Footer() {
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);

  const handleCreatorNoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCreatorModalOpen(true);
  };

//   // Handle modal open/close with body scroll
//   useEffect(() => {
//     if (isCreatorModalOpen) {
//       // Disable locomotive scroll when modal is open
//       const locomotiveEl = document.querySelector('[data-scroll-container]');
//       if (locomotiveEl) {
//         locomotiveEl.className = 'style';
//       }
//       document.body.className = 'style';
//     } else {
//       // Re-enable locomotive scroll when modal is closed
//       const locomotiveEl = document.querySelector('[data-scroll-container]');
//       if (locomotiveEl) {
//         locomotiveEl.className = '';
//       }
//       document.body.className = '';
//     }

//     return () => {
//       // Cleanup
//       const locomotiveEl = document.querySelector('[data-scroll-container]');
//       if (locomotiveEl) {
//         locomotiveEl.className = '';
//       }
//       document.body.className = '';
//     };
//   }, [isCreatorModalOpen]);

  return (
    <>
      <footer className="bg-[#0a0a0a] py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <img src="/logo.svg" alt="Fona" className='w-12 h-12' />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:gap-6 sm:flex-row">
              <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
                <button
                  onClick={handleCreatorNoteClick}
                  className="text-gray-400 transition-colors hover:text-[#dc586d] cursor-pointer relative z-10 text-sm sm:text-base"
                  type="button"
                >
                  Creator's Note
                </button>
              </nav>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://coff.ee/meetjainn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 sm:gap-2 rounded-full bg-neutral-900 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-neutral-50 transition-all hover:bg-neutral-800"
                >
                  <Coffee size={14} className="transition-transform group-hover:scale-110 flex-shrink-0" />
                  <span>Support Us</span>
                </a>
                <a
                  href="https://github.com/useFona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-neutral-600 transition-all hover:bg-neutral-50 hover:shadow-sm"
                >
                  <Github size={14} className="transition-transform group-hover:scale-110 flex-shrink-0" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#292929] pt-4 text-xs sm:text-sm text-neutral-500 sm:pt-6 md:flex-row md:gap-0">
            <p className="text-center">
              © {new Date().getFullYear()} SOA. All rights reserved.
            </p>
            <p className="mt-1 sm:mt-2 text-center text-xs sm:text-sm md:mt-0">
              Made with <span className="text-red-500">♥</span> by{" "}
              <a
                href="https://github.com/not-meet"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-[#dc586d]"
              >
                Meet Jain
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Creator Note Modal - Render outside of locomotive scroll container */}
      {isCreatorModalOpen && (
        <CreatorNoteModal 
          isOpen={isCreatorModalOpen} 
          onClose={() => setIsCreatorModalOpen(false)} 
        />
      )}
    </>
  );
}
