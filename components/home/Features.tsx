"use client"
import { useState } from "react"
import { Check, Mail } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AuroraText } from "@/components/ui/aurora-text"
import { Highlighter } from "@/components/ui/highlighter"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

const AuthDistroCard = ({ 
  title, 
  icon, 
  colors, 
  animationSpeed 
}: { 
  title: string
  icon: React.ReactNode
  colors: number[][]
  animationSpeed: number
}) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-1 relative flex flex-col items-center justify-center gap-3 min-h-[200px]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={animationSpeed}
              containerClassName="bg-[#111111]"
              colors={colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-10 flex flex-col items-center gap-3">
        {icon}
        <span className="text-base text-gray-300 font-semibold">{title}</span>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <AuroraText 
            colors={["#fafafa", "#e0e0e0", "#bdbdbd"]} 
            className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight font-fjalla"
          >
            Roll your fav auth in your fav framework!
          </AuroraText>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {/* Row 1: Merged A1 + A2 - OAuth Plugins */}
          <div className="md:col-span-2 bg-gradient-to-br from-75%-[#181818] to-[#afac18] p-[1px]">
            <Card className="h-full border-none p-0 shadow-none bg-[#111111] backdrop-blur-sm rounded-none hover:shadow-2xl hover:shadow-black/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 p-4 md:p-5 pb-4 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 font-inter">
                  Select your fav oauth plugins
                </h3>
              </div>
              <div className="flex items-stretch h-full min-h-[280px]">
                {/* Email-Password */}
                <AuthDistroCard
                  title="Email-Pass"
                  animationSpeed={3.8}
                  colors={[[239, 68, 68], [220, 38, 38]]}
                  icon={
                    <Mail className="w-16 h-16 md:w-20 md:h-20 text-red-400" strokeWidth={1.5} />
                  }
                />

                {/* Google */}
                <AuthDistroCard
                  title="Google"
                  animationSpeed={3.5}
                  colors={[[66, 133, 244], [234, 67, 53]]}
                  icon={
                    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  }
                />

                {/* Discord */}
                <AuthDistroCard
                  title="Discord"
                  animationSpeed={4}
                  colors={[[88, 101, 242]]}
                  icon={
                    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  }
                />

                {/* GitHub */}
                <AuthDistroCard
                  title="GitHub"
                  animationSpeed={3.2}
                  colors={[[88, 88, 88], [45, 45, 45]]}
                  icon={
                    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  }
                />
              </div>
            </Card>
          </div>

          {/* Row 1: A3 - Add Authentication */}
          <div className="bg-gradient-to-bl from-75%-[#181818] to-[#afac18] p-[1px]">
            <Card className="h-full p-0 shadow-none rounded-none bg-[#111111] backdrop-blur-sm border-none flex items-center justify-center hover:shadow-2xl hover:shadow-black/50">
              <CardContent className="p-4 md:p-5">
                <Highlighter colors={["#004779", "#0063a9", "#4ecdff"]} action="highlight" iterations={3}>
                  <p className="text-xl md:text-2xl text-center text-[#111111] leading-relaxed font-inter font-semibold relative z-10">
                    Add authentication in a predefined repo or create a new one with soa!
                  </p>
                </Highlighter>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: B1 - SOA UI Pack */}
          <div className="bg-gradient-to-tr from-90%-[#181818] to-[#afac18] p-[1px]">
            <Card className="h-full p-0 shadow-none bg-[#111111] backdrop-blur-md border-none rounded-none hover:shadow-2xl hover:shadow-black/50">
              <CardHeader className="p-4 md:p-5 pb-2">
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-100 font-inter leading-tight">
                  Soa ui pack!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2 md:p-4 pt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300 text-base md:text-lg">
                    <Check className="w-5 h-5 bg-green-400/10 p-1 border border-green-400/20 rounded-full text-green-400 flex-shrink-0" />
                    <span className="font-semibold">Precreated auth routes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-base md:text-lg">
                    <Check className="w-5 h-5 bg-green-400/10 p-1 border border-green-400/20 rounded-full text-green-400 flex-shrink-0" />
                    <span className="font-semibold">Reusable auth components</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-base md:text-lg">
                    <Check className="w-5 h-5 bg-green-400/10 p-1 border border-green-400/20 rounded-full text-green-400 flex-shrink-0" />
                    <span className="font-semibold">Pre created react hooks</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-base md:text-lg">
                    <Check className="w-5 h-5 bg-green-400/10 p-1 border border-green-400/20 rounded-full text-green-400 flex-shrink-0" />
                    <span className="font-semibold">Pre created error pages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: Merged B2 + B3 - Auth Distros */}
          <div className="md:col-span-2 bg-gradient-to-tl from-75%-[#181818] to-[#afac18] p-[1px]">
            <Card className="h-full p-0 shadow-none bg-[#111111] backdrop-blur-sm border-none rounded-none hover:shadow-2xl hover:shadow-black/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 p-4 md:p-5 pb-4 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 font-inter">
                  Setup your fav auth distros
                </h3>
              </div>
              <div className="flex items-stretch h-full min-h-[280px]">
                {/* Supabase */}
                <AuthDistroCard
                  title="Supabase"
                  animationSpeed={3.5}
                  colors={[[36, 147, 97], [62, 207, 142]]}
                  icon={
                    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)" />
                      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity="0.2" />
                      <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
                      <defs>
                        <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#249361" />
                          <stop offset="1" stopColor="#3ECF8E" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                          <stop />
                          <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  }
                />

                {/* Better Auth */}
                <AuthDistroCard
                  title="Better Auth"
                  animationSpeed={4}
                  colors={[[96, 165, 250]]}
                  icon={
                    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400" />
                    </svg>
                  }
                />

                {/* Clerk */}
                <AuthDistroCard
                  title="Clerk"
                  animationSpeed={3.2}
                  colors={[[108, 71, 255]]}
                  icon={
                    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="4" fill="#6C47FF" />
                      <path d="M9 12L11 14L15 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  }
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}