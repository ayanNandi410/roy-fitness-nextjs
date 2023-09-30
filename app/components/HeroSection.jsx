"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineFacebook
} from "react-icons/ai";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent text-sky-400 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Debashis Roy",
                3000,
                "Fitness Trainer",
                2000,
                "Health Nutritionist",
                2000,
                "Your Health Expert",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a certified and registered Fitness Trainer and Health Nutritionist.
            I love helping people to reach their health goals.
          </p>
          <div className="text-5xl flex gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link href="#" target="_blank" className="content-center">
                <AiOutlineInstagram />
              </Link>
              <Link href="https://wa.link/8xdmkt" target="_blank">
                <AiOutlineWhatsApp />
              </Link>
              <Link href="https://www.facebook.com/jiko.roy" target="_blank">
                <AiOutlineFacebook />
              </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="mx-auto rounded-full w-80 h-80 relative mt-20 md:h-96 md:w-96 md:ms-20">
            <Image
              src="/images/profilePic.jpg"
              alt="Profile Picture"
              className="rounded-full absolute"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;