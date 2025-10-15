import React from 'react';
import { Github} from 'lucide-react';
import Image from 'next/image';
import x from '@/constants/icons/x.svg';
import npm from '@/constants/icons/npm.svg';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between backdrop-blur-[10px] bg-white/5 border border-white/10  px-6 py-1 shadow-lg">
          {/* Logo/SVG on the left */}
          <div className="flex items-center">
            <img src="logo.svg" alt="Logo" className="w-14 h-14" />
          </div>

          {/* Navigation links on the right */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.npmjs.com/package/soa-auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform duration-200"
              aria-label="npm"
            >
              <Image src={npm} alt="npm" className='invert hover:scale-110 transition-transform duration-200'/>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform duration-200"
              aria-label="GitHub"
            >
              <Github className="text-white w-6 h-6" />
            </a>

            <a
              href="https://x.com/Heyy_Meet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform duration-200"
              aria-label="X"
            >
              <Image src={x} alt="x" className="size-5 invert-0 hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
