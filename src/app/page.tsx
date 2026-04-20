import { FloatingCard } from "@/components/FloatingCard";
import { CopyDiscord } from "@/components/CopyDiscord";
import { PixelDust } from "@/components/PixelDust";
import { IconTelegram, IconX } from "@/components/icons";
import { Tweet } from "react-tweet";

function SizedTweet({ id }: { id: string }) {
  return (
    <div className="tweet-wrapper">
      <Tweet id={id} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-6 py-20 lg:py-32 flex flex-col items-center max-w-5xl" data-theme="dark">
      <PixelDust />

      <section className="flex flex-col items-center w-full mb-24 relative mt-12">
        <div className="relative mb-2">
          <img 
            src="https://pbs.twimg.com/profile_images/1984932425877581824/0LGX6EXZ_400x400.jpg" 
            alt="sqwizee avatar" 
            className="w-40 h-40 rounded-none pixel-corners border-2 border-white/10 object-cover shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-gray-100 text-center">
          sqwizee
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://t.me/sqwizeeETH"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 bg-white/5 rounded-none pixel-corners transition-all group"
          >
            <IconTelegram className="w-5 h-5 group-hover:text-white text-gray-400 transition-colors" />
            <span className="text-gray-300 group-hover:text-white transition-colors">Channel</span>
          </a>
          <a
            href="https://t.me/sqwizeeqq"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 bg-white/5 rounded-none pixel-corners transition-all group"
          >
            <IconTelegram className="w-5 h-5 group-hover:text-white text-gray-400 transition-colors" />
            <span className="text-gray-300 group-hover:text-white transition-colors">DM</span>
          </a>
          <a
            href="https://x.com/sqw11z33"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 bg-white/5 rounded-none pixel-corners transition-all group"
          >
            <IconX className="w-5 h-5 group-hover:text-white text-gray-400 transition-colors" />
            <span className="text-gray-300 group-hover:text-white transition-colors">X</span>
          </a>
          <CopyDiscord text="@sqw1zee" />
        </div>
      </section>

      <section className="w-full max-w-3xl mb-24">
        <FloatingCard delay={0.1} className="p-8 md:p-10">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
            I am a high-tier content creator for Web3 projects and a proficient developer with a portfolio of successful web applications. I specialize in unique infographics, original content strategy, and clean code implementation. Projects love me for my excellent communication skills, high individuality, creativity, as well as my incredible skills in content creation.
          </p>
        </FloatingCard>
      </section>

      <section className="w-full flex flex-col gap-24">
        
        <div className="flex flex-col gap-6">
          <div className="ml-2 flex flex-col gap-1">
            <h2 className="text-2xl uppercase tracking-widest text-neutral-300 font-bold">Bulk Hub</h2>
            <p className="text-base text-neutral-500 font-light tracking-wide">A website that aggregates a massive amount of community information for Bulk</p>
          </div>
          <FloatingCard delay={0.2} className="w-full flex justify-center" noBackground>
             <div className="w-full max-w-lg mx-auto flex flex-col items-center">
                <Tweet id="2015786801944809849" />
             </div>
          </FloatingCard>
          <FloatingCard delay={0.3} className="w-full flex justify-center -mt-2" noBackground disableHover>
             <div className="w-full max-w-lg mx-auto flex justify-center">
                <a href="https://www.bulkhub.online/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 rounded-none pixel-corners transition-all group font-mono tracking-widest text-sm uppercase text-gray-200 hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full justify-center">
                   Visit Website →
                </a>
             </div>
          </FloatingCard>
        </div>

        <div className="flex flex-col gap-6">
          <div className="ml-2 flex flex-col gap-1">
            <h2 className="text-2xl uppercase tracking-widest text-neutral-300 font-bold">Educational Videos</h2>
            <p className="text-base text-neutral-500 font-light tracking-wide">My educational, useful, funny, and original videos for projects</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FloatingCard delay={0.3} className="flex justify-center" noBackground>
              <SizedTweet id="2003943245135728651" />
            </FloatingCard>
            <FloatingCard delay={0.4} className="flex justify-center" noBackground>
              <SizedTweet id="1972347190917152838" />
            </FloatingCard>
            <FloatingCard delay={0.5} className="flex justify-center" noBackground>
              <SizedTweet id="1906294252096688493" />
            </FloatingCard>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="ml-2 flex flex-col gap-1">
            <h2 className="text-2xl uppercase tracking-widest text-neutral-300 font-bold">Infographics</h2>
            <p className="text-base text-neutral-500 font-light tracking-wide">My unique and original infographics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingCard delay={0.6} className="flex justify-center" noBackground>
              <SizedTweet id="1979928851690975653" />
            </FloatingCard>
            <FloatingCard delay={0.7} className="flex justify-center" noBackground>
              <SizedTweet id="1944037820965777830" />
            </FloatingCard>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="ml-2 flex flex-col gap-1">
            <h2 className="text-2xl uppercase tracking-widest text-neutral-300 font-bold">Digital Art</h2>
            <p className="text-base text-neutral-500 font-light tracking-wide">My beautiful and cute arts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingCard delay={0.8} className="flex justify-center" noBackground>
              <SizedTweet id="2004657428584071531" />
            </FloatingCard>
            <FloatingCard delay={0.9} className="flex justify-center" noBackground>
              <SizedTweet id="1989757586900394045" />
            </FloatingCard>
          </div>
        </div>

      </section>

      <footer className="mt-32 pb-8 text-center text-gray-600 font-mono text-base tracking-widest">
        made by sqwizee
      </footer>
    </main>
  );
}
