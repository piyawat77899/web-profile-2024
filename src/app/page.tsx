import Image from "next/image";
import Profile from "./_components/Profile";
import Bio from "./_components/Bio";
import Personality from "./_components/Personality";
import Education from "./_components/Education";
import Skill from "./_components/Skill";
import Goals from "./_components/Goals";
import Portfolio from "./_components/Portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto pt-4 bg-pink-200 pb-8">
      <div className="flex gap-4 justify-end pb-4">
        <div>
          <Link href="/" className="hover:text-blue-600">
            Profile
          </Link>
        </div>
        <div>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-8 gap-4 border-white">
        <div className="col-span-2 border-4 border-white border-solid md:border-dotted rounded-2xl">
          <Profile />
        </div>
        <div className="grid col-span-6 grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="grid col-span-3 gap-4 border-4 border-white border-solid md:border-dotted rounded-2xl">
            <Bio />
          </div>
          <div className="grid col-span-3 gap-4 border-4 border-white border-solid md:border-dotted rounded-2xl">
            <Skill />
          </div>
          <div className="grid col-span-3 gap-4 border-4 border-white border-solid md:border-dotted rounded-2xl">
            <Personality />
          </div>
          <div className="grid col-span-3 gap-4 border-4 border-white border-solid md:border-dotted rounded-2xl">
            <Education />
          </div>
          <div className="grid col-span-3 gap-4 border-4 border-white border-solid md:border-dotted rounded-2xl">
            <Goals />
          </div>
          <div className="grid col-span-3 gap-4 border-4 border-white border-solid md:border-dotted rounded-2xl">
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}
