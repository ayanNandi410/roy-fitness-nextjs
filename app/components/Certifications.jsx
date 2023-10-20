"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const Certifications = () => {

  return (
    <section className="text-white mb-10" id="about">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Certifications
        </h2>
        <div className="flex justify-center">
            <Image 
                src="/images/cert.jpg"
                width={900}
                height={900}
            />
        </div>
    </section>
  );
};

export default Certifications;