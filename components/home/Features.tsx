"use client"
import { useState } from "react"
import { Check, Mail } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AuroraText } from "@/components/ui/aurora-text"
import { Highlighter } from "@/components/ui/highlighter"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import Image from "next/image"
import googleOutline from "@/constants/icons/googleOutline.svg"
import emailOutline from "@/constants/icons/emailOutline.svg"
import discordOutline from "@/constants/icons/discordOutline.svg"
import githubOutline from "@/constants/icons/githubOutline.svg"
import email from "@/constants/icons/email.svg"
import google from "@/constants/icons/google.svg"
import discord from "@/constants/icons/discord.svg"
import github from "@/constants/icons/github.svg"
import supabaseOutline from "@/constants/icons/supabaseOutline.svg"
import supabase from "@/constants/icons/supabase.svg"
import clerk from "@/constants/icons/clerk.svg"
import betterAuth from "@/constants/icons/betterAuth.svg"
import { PointerHighlight } from "../ui/pointer-highlight"

const AuthDistroCard = ({ 
  title, 
  icon, 
  colors, 
  animationSpeed,
  hoverIcon,
  isLast = false,
}: { 
  title: string
  icon: React.ReactNode
  colors: number[][]
  animationSpeed: number
  hoverIcon?: React.ReactNode
  isLast?: boolean
}) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex-1 relative flex flex-col items-center justify-center gap-3 min-h-[200px] ${!isLast ? 'border-r border-black/50' : ''}`}
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
        <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            animate={{
              scale: hovered ? [1, 1.2, 1.1] : 1,
              y: hovered ? -5 : 0,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
          >
            <div className={`absolute transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
              {icon}
            </div>
            {hoverIcon && (
              <div className={`absolute transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                {hoverIcon}
              </div>
            )}
          </motion.div>
        </div>
        <motion.span 
          className="text-base text-neutral-500/40 font-bold font-inter"
          animate={{
            y: hovered ? 5 : 0,
            opacity: hovered ? 0.9 : 1,
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.span>
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
          <div className="md:col-span-2 bg-gradient-to-br from-55% to-[#febf01] p-[1px]">
            <Card className="h-full border-none p-0 shadow-none bg-[#111111] backdrop-blur-sm rounded-none hover:shadow-2xl hover:shadow-black/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 p-4 md:p-5 pb-4 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 font-inter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
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
                    <Image src={emailOutline} alt="email" className="w-16 h-16 md:w-20 md:h-20 invert-50" />
                  }
                  hoverIcon={
                    <Image src={email} alt="email" className="w-16 h-16 md:w-20 md:h-20 invert" />
                  }
                />

                {/* Google */}
                <AuthDistroCard
                  title="Google"
                  animationSpeed={3.5}
                  colors={[[36, 147, 97], [62, 207, 142]]}
                  icon={
                    <Image src={googleOutline} alt="google" className="w-16 h-16 md:w-20 md:h-20 invert-50" />
                  }
                  hoverIcon={
                    <Image src={google} alt="google" className="w-16 h-16 md:w-20 md:h-20" />
                  }
                />

                {/* Discord */}
                <AuthDistroCard
                  title="Discord"
                  animationSpeed={4}
                  colors={[[88, 101, 242]]}
                  icon={
                    <Image src={discordOutline} alt="discord" className="w-16 h-16 md:w-20 md:h-20 invert-50" />
                  }
                  hoverIcon={
                    <Image src={discord} alt="discord" className="w-16 h-16 md:w-20 md:h-20" />
                  }
                />

                {/* GitHub */}
                <AuthDistroCard
                  title="GitHub"
                  animationSpeed={3.2}
                  colors={[[88, 88, 88], [45, 45, 45]]}
                  icon={
                    <Image src={githubOutline} alt="github" className="w-16 h-16 md:w-20 md:h-20 invert-50" />
                  }
                  hoverIcon={
                    <Image src={github} alt="github" className="w-16 h-16 md:w-20 md:h-20 invert" />
                  }
                  isLast={true}
                />
              </div>
            </Card>
          </div>

          {/* Row 1: A3 - Add Authentication */}
          <div className="bg-gradient-to-bl from-55% to-[#febf01] p-[1px]">
            <Card className="h-full p-0 shadow-none rounded-none bg-[#111111] backdrop-blur-sm border-none flex items-center justify-center hover:shadow-2xl hover:shadow-black/50">
              <CardContent className="p-4 md:p-5">
                <Highlighter colors={['#111111', '#febf01', '#f2cf7f', '#d3d3d5']} action="highlight" iterations={4}>
                  <p className="text-xl md:text-2xl text-center text-[#111111] leading-relaxed font-inter font-semibold relative z-10">
                    Add authentication in a predefined repo or create a new one with soa!
                  </p>
                </Highlighter>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: B1 - SOA UI Pack */}
          <div className="bg-gradient-to-tr from-55% to-[#febf01] p-[1px]">
            <Card className="h-full p-0 shadow-none bg-[#111111] backdrop-blur-md border-none rounded-none hover:shadow-2xl hover:shadow-black/50">
              <CardHeader className="pt-4 md:pt-5 pb-2">
              <PointerHighlight containerClassName="" pointerClassName="text-neutral-500" rectangleClassName="border-[#febf01] bg-neutral-500/10 border-dashed">
                <CardTitle className="text-xl md:text-2xl m-2 font-bold text-gray-100 font-inter leading-tight">
                  Soa ui pack!
                </CardTitle>
                </PointerHighlight>
              </CardHeader>
              <CardContent className="p-2 md:p-4 pt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300 text-lg md:text-xl">
                    <Check className="w-5 h-5 bg-green-400/10 p-1 border border-green-400/20 rounded-full text-green-400 flex-shrink-0" />
                    <span className="font-semibold">Precreated auth routes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-lg md:text-xl">
                    <Check className="w-5 h-5 bg-green-400/10 p-1 border border-green-400/20 rounded-full text-green-400 flex-shrink-0" />
                    <span className="font-semibold">Reusable auth components</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-lg md:text-xl">
                    <Check className="w-5 h-5 bg-green-400/10 p-1 border border-green-400/20 rounded-full text-green-400 flex-shrink-0" />
                    <span className="font-semibold">Pre created react hooks</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-lg md:text-xl">
                    <Check className="w-5 h-5 bg-green-400/10 p-1 border border-green-400/20 rounded-full text-green-400 flex-shrink-0" />
                    <span className="font-semibold">Pre created error pages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: Merged B2 + B3 - Auth Distros */}
          <div className="md:col-span-2 bg-gradient-to-tl from-55% to-[#febf01] p-[1px]">
            <Card className="h-full p-0 shadow-none bg-[#111111] backdrop-blur-sm border-none rounded-none hover:shadow-2xl hover:shadow-black/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 p-4 md:p-5 pb-4 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 font-inter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
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
                    <Image src={supabaseOutline} alt="supabase" className="w-16 h-16 md:w-20 md:h-20 invert-50" />
                  }
                  hoverIcon={
                    <Image src={supabase} alt="supabase" className="w-16 h-16 md:w-20 md:h-20" />
                  }
                />

                {/* Better Auth */}
                <AuthDistroCard
                  title="Better Auth"
                  animationSpeed={4}
                  colors={[[88, 88, 88], [45, 45, 45]]}
                  icon={<Image src={betterAuth} alt="better auth" className="w-16 h-16 md:w-20 md:h-20 invert-50" />}
                  hoverIcon={<Image src={betterAuth} alt="better auth" className="w-16 h-16 md:w-20 md:h-20 invert" />}
                />

                {/* Clerk */}
                <AuthDistroCard
                  title="Clerk"
                  animationSpeed={3.2}
                  colors={[[108, 71, 255]]}
                  icon={
                    <Image src={clerk} alt="clerk" className="w-16 h-16 md:w-20 md:h-20 invert-50" />
                  }
                  hoverIcon={
                    <Image src={clerk} alt="clerk" className="w-16 h-16 md:w-20 md:h-20 invert" />
                  }
                  isLast={true}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}