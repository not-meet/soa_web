"use client"
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AuroraText } from '../ui/aurora-text';

const HeroSection = () => {
  const [packageManager, setPackageManager] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('preferredPackageManager') || 'npm';
    }
    return 'npm';
  });
  const [copied, setCopied] = useState(false);
  const handlePackageManagerChange = (value: string) => {
    setPackageManager(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredPackageManager', value);
    }
  };
  const commands: Record<string, string> = {
    'npm': 'npx soa-auth@beta',
    'bun': 'bunx soa-auth@beta',
    'pnpm': 'pnpx soa-auth@beta',
    'yarn': 'yarn dlx soa-auth@beta'
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[packageManager]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen flex items-center px-8 py-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
        {/* Left Side - Text and CLI (40%) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          {/* Hero Text */}
          <div className="space-y-4 text-left">
            <AuroraText colors={["#fafafa", "#e0e0e0", "#bdbdbd"]} className="text-5xl lg:text-6xl font-bold text-gray-100 leading-tight font-fjalla">
              Add authentication in your daily projects in just minutes!
            </AuroraText>
            <p className="text-lg lg:text-xl w-[80%] text-gray-100/40 leading-relaxed font-inter">
              auth made so simple that even your teammates ask! how you did all this in minutes?
            </p>
          </div>

          {/* CLI Command Section */}
          <div className="space-y-3 w-[80%] bg-white/5 backdrop-blur-sm p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                CLI Command
              </label>
              <Select value={packageManager} onValueChange={handlePackageManagerChange}>
                <SelectTrigger className="w-32 bg-[#111111] backdrop-blur-lg border-gray-700/95 text-gray-200/95">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#111111] border-gray-700/95">
                  <SelectItem value="npm" className="text-gray-200 focus:bg-gray-700 focus:text-gray-100">npm</SelectItem>
                  <SelectItem value="bun" className="text-gray-200 focus:bg-gray-700 focus:text-gray-100">bun</SelectItem>
                  <SelectItem value="pnpm" className="text-gray-200 focus:bg-gray-700 focus:text-gray-100">pnpm</SelectItem>
                  <SelectItem value="yarn" className="text-gray-200 focus:bg-gray-700 focus:text-gray-100">yarn</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <input
                type="text"
                readOnly
                value={commands[packageManager]}
                className="w-full px-4 py-3 pr-12 bg-[#111111] border border-gray-700 rounded-lg text-gray-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button
                onClick={handleCopy}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-700 rounded-md transition-colors"
                aria-label="Copy command"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Demo Space (60%) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full h-96 lg:h-[500px] bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Interactive Demo Space</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
