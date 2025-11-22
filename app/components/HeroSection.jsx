"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Abdennour",
                1500,
                "Web Developer",
                1500,
                "Mobile Developer",
                1500,
                "UI/UX Designer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-300"
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-2xl">
            From Mama Africa 🌍 to the world — building modern, responsive web experiences.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 
                         text-white font-semibold shadow hover:bg-slate-200 hover:text-blue-700 transition"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-full border border-blue-500 text-blue-500 
                         font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-4 place-self-center"
        >
          <div className="rounded-full bg-[#000000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-lg">
            <Image
              src="/hero-image2.jpg"
              alt="hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
