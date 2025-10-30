"use client"
import { Check } from "lucide-react"
import { motion } from "motion/react"
import { AuroraText } from "../ui/aurora-text"
import NextJSIcon from "@/constants/icons/nextjs.svg"
import AstroIcon from "@/constants/icons/astro.svg"
import SvelteIcon from "@/constants/icons/svelt.svg"
import RemixIcon from "@/constants/icons/remix.svg"
import NuxtIcon from "@/constants/icons/nuxt.svg"
import Image from "next/image"

export default function Upcoming() {
  const frameworks = [
    { name: "Next.js", icon: NextJSIcon, checked: true, badge: "Breakthrough" },
    { name: "Astro", icon: AstroIcon, checked: false },
    { name: "Svelt", icon: SvelteIcon, checked: false },
    { name: "Remix", icon: RemixIcon, checked: false },
    { name: "Nuxt", icon: NuxtIcon, checked: false }
  ]

  const features = [
    "More plugins!",
    "More UI template options",
    "More faster setups!",
    "Ejectable auth!?"
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 relative">
      {/* Overlay for sneak peek effect */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.2) 60%, #0a0a0a 80%, #0a0a0a 100%)'
      }}></div>
      
      <div className="max-w-6xl mx-auto relative z-0">
        {/* Title */}
        <div className="mb-12 text-center">
          <AuroraText className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight font-fjalla" 
            colors={["#fafafa", "#e0e0e0", "#bdbdbd"]} 
          >
            What's coming next?
          </AuroraText>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Frameworks */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 font-inter ">
              Framework Support
            </h3>
            <div className="space-y-3">
              {frameworks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    item.checked 
                      ? "bg-gradient-to-r from-[#133613] to-[#0a0a0a]" 
                      : "bg-gradient-to-r from-[#111111] to-[#0a0a0a]"
                  }`}
                >
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    item.checked 
                      ? "bg-green-400/10 border-green-400/10 backdrop-blur-[1px]" 
                      : "border-gray-600"
                  }`}>
                    {item.checked && (
                      <Check className="w-4 h-4 text-black" />
                    )}
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image 
                      src={item.icon} 
                      alt={`${item.name} icon`}
                      width={28} 
                      height={28} 
                      className="w-7 h-7 invert-75"
                    />
                  </div>
                  {item.badge ? (
                    <span className="text-gray-300 text-xl md:text-2xl font-semibold font-inter line-through">
                      {item.name}
                    </span>
                  ) : (
                    <span className="text-gray-300 text-xl md:text-2xl font-semibold font-inter">
                      {item.name}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6">
            {/* SOA SDK Header */}
            <div>
              <AuroraText  
                className="text-7xl md:text-7xl font-inter font-extrabold mb-3 text-center" 
                colors={['#FDE047','#FB923C','#67E8F9','#ffffff']}
              >
                SOA SDK ??
              </AuroraText>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4"></div>
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-gradient-to-tr from-55% to-[#febf01] p-[1px]"
                  >
                    <div className="bg-[#111111] backdrop-blur-sm p-4 md:p-6 text-center min-h-[140px] flex items-center justify-center">
                      <p className="text-lg md:text-xl font-bold text-gray-100">
                        {feature}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}