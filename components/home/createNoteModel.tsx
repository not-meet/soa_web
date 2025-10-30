'use client'
import { Github, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ComicText } from "../ui/comic-text";
import { PixelImage } from "../ui/pixel-image";
import { AuroraText } from "../ui/aurora-text";
import x from '@/constants/icons/x.svg';
import linkedin from '@/constants/icons/linkedin.svg';
import Image from 'next/image';

interface CreatorNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatorNoteModal: React.FC<CreatorNoteModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-7xl h-[85vh] bg-[#0a0a0a] rounded-lg border border-white/10 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center justify-between">
            <AuroraText colors={["#FFBB94", "#DC586D", "#FB9590"]} className="text-2xl font-bold">
              Creator's Note
            </AuroraText>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="flex flex-col items-center lg:flex-row gap-8">
            {/* Left side - Image */}
            <div className="lg:w-2/5 xl:w-1/3 flex-shrink-0">
              <div className="relative">
                <PixelImage
                  src="/creator.jpeg"
                  customGrid={{ rows: 8, cols: 6 }}
                  grayscaleAnimation
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="https://github.com/not-meet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://twitter.com/not-meet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label="X (Twitter)"
                >
                  <Image src={x} alt="X" className='w-5 h-5 ' />
                </a>
                <a
                  href="https://linkedin.com/in/not-meet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Image src={linkedin} alt="LinkedIn" className='w-6 h-6 invert' />
                </a>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-3/5 xl:w-2/3 space-y-6">
              <div className="text-center mb-6">
                <ComicText fontSize={2}>Meet Jain</ComicText>
              </div>

              <div>
                <div className="prose prose-invert max-w-none space-y-4 text-gray-300 font-inter leading-relaxed">
                  <p>
                    Welcome to <span className="text-[#DC586D] font-semibold">SOA</span>! I'm thrilled you're here exploring this project.
                  </p>

                  <p>
                    I'm a full stack developer trying to make meaningful changes in the ecosystem, and one of my solutions to real-world problems is <span className="text-[#DC586D] font-semibold">SOA</span>!
                  </p>

                  <p>
                    The idea struck me when I noticed the massive chunk of work pressure many rookie devs, freelancing devs, and others face while creating any new project. Adding authentication can be a nightmare — selecting the right auth provider, choosing a distribution, picking plugins, creating pages, and so much more. It can take hours just to get auth working!
                  </p>

                  <p>
                    That's where SOA shines. It's not just another boilerplate CLI — it's something that gives you tons of options to choose from for auth! From built-in components to ready-made pages, OAuth to email/password with different distributions like Clerk, Better Auth, and more. The best part? You don't even need to create a project from scratch to use it. It works seamlessly with pre-existing repos, and if you don't have one, we let you create one right through our platform!
                  </p>

                  <p>
                    <span className="text-[#DC586D] font-semibold">SOA is here to fix your auth issues once and for all!</span> No more spending hours setting up authentication — just pick what you need and get building.
                  </p>

                  <p>
                    I hope you find it useful! Feel free to experiment, suggest changes, report bugs, and contribute. It would be amazing if we could make this better together!
                  </p>

                  <p className="text-[#FFBB94] font-medium">
                    Thanks for checking it out — I'll keep improving and adding new features. If it helps you, consider supporting the project! ✨
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-500 text-center">
                  Check out my <a href="https://meet-jain.in/" target="_blank" rel="noopener noreferrer" className="text-[#DC586D] hover:underline">portfolio</a> for more projects and work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render modal outside of locomotive scroll container
  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

export default CreatorNoteModal;