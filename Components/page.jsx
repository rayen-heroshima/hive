'use client';
import Image from "next/image";
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

export default function Page() {
  return (
    <div className="h-screen bg-[#222020] p-6 md:p-28 relative overflow-hidden"> {/* Ensure overflow is hidden for background animation */}
      <BackgroundGradientAnimation />

      <div className="flex flex-col md:flex-row gap-10 md:gap-44 relative z-10"> {/* Responsive layout for different screen sizes */}
        {/* Left Column */}
        <div className="flex flex-col justify-around gap-8 md:gap-20">
          <div className="relative pr-6">
            <div className="h-[448px] w-[300px] absolute bottom-0 z-10 bg-[#FBA705] shadow-lg rounded-lg"></div>
            <img
              src="/whoIs.jpg"
              className="h-auto w-auto relative z-20 ml-4 mr-8 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-lg"
              alt="Hive Club Image"
            />
            <div className="h-[448px] w-[300px] absolute top-0 right-0 z-10 bg-[#FBA705] shadow-lg rounded-lg"></div>
          </div>
          <p className="text-white text-lg leading-relaxed md:leading-relaxed">
            شكون ال <span className="text-[#FBA705] font-semibold">Hive Club</span> ؟؟ كيما إسمها Hive " خلية " و Team تحب إطور و تتطور، بدأت تنشط في ال
            <span className="text-[#FBA705] font-semibold"> Problem solving </span> و ال
            <span className="text-[#FBA705] font-semibold"> Competitive programming </span> مبعد زدنا ال
            <span className="text-[#FBA705] font-semibold"> Web development </span>.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-around gap-8 md:gap-20">
          <p className="text-white text-lg leading-relaxed md:leading-relaxed">
            شكون ال <span className="text-[#FBA705] font-semibold">Hive Club</span> ؟؟ كيما إسمها Hive " خلية " و Team تحب إطور و تتطور، بدأت تنشط في ال
            <span className="text-[#FBA705] font-semibold"> Problem solving </span> و ال
            <span className="text-[#FBA705] font-semibold"> Competitive programming </span> مبعد زدنا ال
            <span className="text-[#FBA705] font-semibold"> Web development </span>.
          </p>
          <div className="relative pr-6">
            <div className="h-[448px] w-[300px] absolute bottom-0 z-10 bg-[#FBA705] shadow-lg rounded-lg"></div>
            <img
              src="/whoIs.jpg"
              className="h-auto w-auto relative z-20 ml-4 mr-8 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-lg"
              alt="Hive Club Image"
            />
            <div className="h-[448px] w-[300px] absolute top-0 right-0 z-10 bg-[#FBA705] shadow-lg rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
