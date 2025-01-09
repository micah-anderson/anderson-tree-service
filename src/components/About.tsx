"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TreeIcons } from "./icons/TreeIcons";
import OptimizedImage from "./OptimizedImage";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.span
                className="bg-black text-green-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-gray-200">ABOUT</span>{" "}
                <span className="text-[#FF6A00]">🌲ANDERSON</span> TREE SERVICE
              </motion.span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Three Decades of Expert
              <span className="text-[#FF6A00] block">
                <span className="text-green-600">Tree </span>Care Excellence
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Since 1993, we've been the trusted name in professional tree care
              throughout the Okanagan Valley. Our certified arborists combine
              decades of experience with cutting-edge techniques to ensure your
              trees remain healthy, safe, and beautiful year-round.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <TreeIcons.Certified />
                  <h3 className="font-semibold text-gray-900">
                    Certified Team
                  </h3>
                </div>
                <p className="text-gray-600">ISA Certified Arborists</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <TreeIcons.Emergency />
                  <h3 className="font-semibold text-gray-900">24/7 Response</h3>
                </div>
                <p className="text-gray-600">
                  Emergency services always available
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-[#FF6A00] pl-4">
                <h3 className="text-3xl font-bold text-gray-900">30+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="border-l-4 border-[#FF6A00] pl-4">
                <h3 className="text-3xl font-bold text-gray-900">5000+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Image Side with Parallax */}
          <motion.div className="relative" style={{ y, opacity }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-image.jpg"
                alt="Professional Tree Care in Kelowna"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FF6A00]/10 rounded-full">
                  <TreeIcons.TreeService />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">ISA Certified</h4>
                  <p className="text-sm text-gray-600">
                    Professional Arborists
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
