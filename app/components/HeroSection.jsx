"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        
        
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
              "Frontend Engineer",
              2000,
              "React & Next.js Developer",
              2000,
              "Building Secure Web Apps",
              2000,
            ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-300"
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-2xl">
          Frontend Engineer focused on building secure, structured, and production-ready web applications.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 
                         text-white font-semibold shadow hover:bg-slate-200 hover:text-blue-700 transition"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1LJu1D3jXfDB2UpQkZntuqODGkaMg8-CQ/view?usp=drive_link"
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
          className="col-span-4 place-self-center w-full flex justify-center sm:justify-end"
        >
          <Image
            src="/6830c279-562c-4634-a269-04939bee4ae0 (1).png"
            alt="hero image"
            width={410}
            height={410}
            className="w-[260px] h-[260px] lg:w-[410px] lg:h-[410px] object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
